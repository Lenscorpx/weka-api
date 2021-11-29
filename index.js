const { ApolloServer, gql } = require('apollo-server');

const mongoose = require('mongoose');
const { Schema } = mongoose;
const { MONGODB } = require ('config.js');
const typeDefs = gql`
    type Query {
        weka: String!
    }
`
const resolvers = {
    Query: {
        weka: ()=>'Welcome to WekaApp!!!'
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, { useNewUrlParser: true });

server.listen({ port: 4000 }).then(({ url }) => {console.log(`🚀  Server ready at ${url}`)});