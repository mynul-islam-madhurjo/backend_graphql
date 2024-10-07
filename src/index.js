const { ApolloServer } = require('apollo-server');
const jwt = require('jsonwebtoken');
const typeDefs = require('./schema/schema');
const resolvers = require('./resolvers/resolvers');

const JWT_SECRET = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NSIsInJvbGUiOiJhZG1pbiJ9.jJVkliSNEoTUK8BPMuoec1351Sd7HNjyEUMeHQSmIyM';

// Authentication function to verify token
const authenticate = (req) => {
    const token = req.headers.authorization || '';

    if (!token.startsWith('Bearer ')) {
        throw new Error('Authorization token must be a Bearer token');
    }

    const jwtToken = token.split(' ')[1];
    try {
        return jwt.verify(jwtToken, JWT_SECRET);
    } catch (err) {
        throw new Error('Invalid or expired token');
    }
};

// Initialize Apollo Server with authentication
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        const user = authenticate(req);
        return { user };
    },
});

// Start the server
server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
