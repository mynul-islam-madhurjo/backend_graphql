const jwt = require('jsonwebtoken');

const JWT_SECRET = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyODI2MjI1MywiZXhwIjoxNzI4Mjk4MjUzfQ.82HaODa9-08u4p9eJGp2uZCso85NNeFhLkp9Ma1RxGA';

const token = jwt.sign(
    {
        userId: '12345',
        role: 'admin'
    },
    JWT_SECRET,
    { expiresIn: '10h' }
);

console.log('Generated Token:', token);
