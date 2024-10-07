const { actions, nodes, resourceTemplates, responses, triggers } = require('../data/dataLoader');

const resolvers = {
    Query: {
        // Resolver for fetching a NodeObject by nodeId
        node: (_, { nodeId }) => nodes.find((node) => node._id === nodeId),
    },
    NodeObject: {
        // Resolver for associated trigger field
        trigger: (node) => triggers.find((trigger) => trigger._id === node.trigger),
        // Resolver for associated actions field
        actions: (node) => (node.actions || []).map((actionId) => actions.find((action) => action._id === actionId)),
        // Resolver for associated responses field
        responses: (node) => (node.responses || []).map((responseId) => responses.find((response) => response._id === responseId)),
    },
    Action: {
        // Resolver for associated resourceTemplate field
        resourceTemplate: (action) => resourceTemplates.find((template) => template._id === action.resourceTemplateId),
    },
    Trigger: {
        // Resolver for associated resourceTemplate field
        resourceTemplate: (trigger) => resourceTemplates.find((template) => template._id === trigger.resourceTemplateId),
    },
};

module.exports = resolvers;

// console.log('Resolvers loaded:', resolvers.Query.node, resolvers.NodeObject.trigger);
