const { ApolloServer, gql } = require('apollo-server');
const {MONGODB} = require('dotenv').config();
const mongoose = require('mongoose');
const { Schema } = mongoose;

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

mongoose.connect(MONGODB, { useNewUrlParser: true })
.then(()=>{
    console.log('MongoDB is connected!');
    return server.listen({ port: 4000 });
})
.then((res)=>{
    console.log(`🚀  Server ready at ${url}`);
});