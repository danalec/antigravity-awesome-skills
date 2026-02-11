const fs = require('fs');
const skills = JSON.parse(fs.readFileSync('skills_index.json', 'utf8'));

const clusters = {
    automation: [],
    security: [],
    frontend: [],
    backend: [],
    agent: [],
    cloud: [],
    languages: [],
    meta: []
};

const patterns = {
    automation: /automation|composio|integrate|api/,
    security: /security|attack|exploit|penetration|pentest|vulnerability|audit|ethical/,
    frontend: /react|angular|svelte|vue|ui|ux|css|html|frontend|web-experience/,
    backend: /node|python|go|rust|csharp|java|api|backend|database|sql|microservices/,
    agent: /agent|autonomous|llm|ai|orchestration|memory|prompt/,
    cloud: /aws|azure|gcp|cloud|serverless|docker|kubernetes|terraform/,
    languages: /typescript|javascript|python|rust|cpp|golang|bash|shell/
};

skills.forEach(skill => {
    const text = (skill.id + ' ' + skill.name + ' ' + skill.description).toLowerCase();
    let assigned = false;
    for (const [key, regex] of Object.entries(patterns)) {
        if (regex.test(text)) {
            clusters[key].push(skill.id);
            assigned = true;
        }
    }
    if (!assigned) clusters.meta.push(skill.id);
});

console.log('--- Skill Density Report ---');
Object.entries(clusters).forEach(([key, list]) => {
    console.log(`${key.toUpperCase()}: ${list.length} skills`);
    if (list.length > 0) {
        console.log(`  Sample: ${list.slice(0, 5).join(', ')}...`);
    }
});

// Check for duplicate-like descriptions (Simplified Jaccard)
function getTokens(str) {
    return new Set(str.toLowerCase().split(/\W+/).filter(s => s.length > 3));
}

function jaccard(s1, s2) {
    const intersect = new Set([...s1].filter(i => s2.has(i)));
    const union = new Set([...s1, ...s2]);
    return intersect.size / union.size;
}

console.log('\n--- Potential Redundancy Pairs (>0.5 similarity) ---');
for (let i = 0; i < Math.min(skills.length, 200); i++) {
    const s1 = getTokens(skills[i].description);
    for (let j = i + 1; j < Math.min(skills.length, 200); j++) {
        const s2 = getTokens(skills[j].description);
        const sim = jaccard(s1, s2);
        if (sim > 0.5) {
            console.log(`Match: [${skills[i].id}] vs [${skills[j].id}] (Sim: ${sim.toFixed(2)})`);
        }
    }
}
