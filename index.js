const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const graphQLSchema = require('./graphql/schema/index.js');
const graphqlResolvers = require('./graphql/resolvers/index.js');
const isAuth = require('./middleware/is-auth.js');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use((req, res, next) +> {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
});

app.use(isAuth);

app.use(
    '/graphql',
    graphqlHTTP({
        schema: graphQlSchema,
        rootValue: graphqlResolvers
    });
);

app.use(express.static(path.join(__dirname, "frontend", "build")));

app.get("*", (req, next) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

app.listen(port);