const {ApolloServer} =require('apollo-server');
const { typeDefs } =require('./server/schema/type-defs');
const { resolvers } =require('./server/schema/resolvers');

const server =new ApolloServer({typeDefs,resolvers});


server.listen().then(({url})=>{
    console.log(`Your API is started : ${url}`)
})