const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const INDEX_FILE = path.join(ROOT, 'skills_index.json');
const THRESHOLD = 0.7; // 70% similarity threshold

function getTokens(str) {
    return new Set(str.toLowerCase().split(/\W+/).filter(s => s.length > 3));
}

function jaccard(s1, s2) {
    if (s1.size === 0 || s2.size === 0) return 0;
    const intersect = new Set([...s1].filter(i => s2.has(i)));
    const union = new Set([...s1, ...s2]);
    return intersect.size / union.size;
}

function runSimilarityAudit() {
    if (!fs.existsSync(INDEX_FILE)) {
        console.error('❌ Error: skills_index.json not found. Run "npm run index" first.');
        process.exit(1);
    }

    const skills = JSON.parse(fs.readFileSync(INDEX_FILE, 'utf8'));
    console.log(`🔍 Auditing ${skills.length} skills for redundancy (Threshold: ${THRESHOLD})...`);

    const duplicates = [];
    const processed = skills.map(s => ({
        id: s.id,
        tokens: getTokens(s.description + ' ' + s.name)
    }));

    for (let i = 0; i < processed.length; i++) {
        for (let j = i + 1; j < processed.length; j++) {
            const sim = jaccard(processed[i].tokens, processed[j].tokens);
            if (sim >= THRESHOLD) {
                duplicates.push({
                    s1: processed[i].id,
                    s2: processed[j].id,
                    similarity: sim
                });
            }
        }
    }

    if (duplicates.length > 0) {
        console.log(`\n🚨 Found ${duplicates.length} potential redundancies:`);
        duplicates.sort((a, b) => b.similarity - a.similarity).forEach(d => {
            console.log(`  - [${d.s1}] vs [${d.s2}] (${(d.similarity * 100).toFixed(1)}% similar)`);
        });
        console.log('\n⚠️  Please consider merging these skills into a unified suite.');
    } else {
        console.log('\n✨ No significant redundancies found. Quality check passed!');
    }
}

if (require.main === module) {
    runSimilarityAudit();
}
