const fs = require('fs');
const path = require('path');

// Load and parse JSON data from files
const loadJSON = (filename) => {
    const filePath = path.join(__dirname, filename);
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
};

// Load each JSON file
const actions = loadJSON('action.json');
const nodes = loadJSON('node.json');
const resourceTemplates = loadJSON('resourceTemplate.json');
const responses = loadJSON('response.json');
const triggers = loadJSON('trigger.json');

// Export loaded data for use in resolvers
module.exports = {
    actions,
    nodes,
    resourceTemplates,
    responses,
    triggers,
};

// console.log(actions, nodes, resourceTemplates, responses, triggers);

