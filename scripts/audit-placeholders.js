const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SKILLS_DIR = path.join(ROOT, 'skills');

function auditPlaceholders() {
    const placeholders = [];

    function listSkills(dir) {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                if (entry.name !== '.disabled' && !entry.name.startsWith('.')) {
                    listSkills(fullPath);
                }
            } else if (entry.name === 'SKILL.md') {
                const content = fs.readFileSync(fullPath, 'utf8');
                const body = content.split('---').slice(2).join('---');
                const lines = body.trim().split('\n').filter(l => l.trim().length > 0);

                if (lines.length < 10) {
                    placeholders.push({
                        id: path.basename(path.dirname(fullPath)),
                        lines: lines.length,
                        path: fullPath
                    });
                }
            }
        }
    }

    listSkills(SKILLS_DIR);

    console.log('--- Placeholder Audit (< 10 lines of body) ---');
    placeholders.forEach(p => {
        console.log(`[${p.id}] - ${p.lines} lines`);
    });
    console.log(`\nTotal placeholders found: ${placeholders.length}`);

    fs.writeFileSync('placeholders.json', JSON.stringify(placeholders, null, 2));
}

auditPlaceholders();
