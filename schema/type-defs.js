const {gql} = require('apollo-server');



const typeDefs = gql`
    type User{
        id:ID!
        name:String!
        username:String!
        age:Int!
        nationality:Nationality
        friends:[User]
    }

    type Movie{
        id:ID!
        name:String!
        rating:String!
        releasedYear:String!
    }


    type Query{
        users: [User!]!               # Getting all user records
        usersByAge(age: Int!): [User] # Getting the users for the given age 
        userById(id: ID!): User!      # Getting the user record from user ID


        movies: [Movie!]!                            # Getting all movie records
        movieById(id:ID!): Movie!                 # Getting a movie record from ID
        movieByYear(releasedYear:String!): [Movie!]! # Getting movie records from released Year

    }


    enum Nationality{
        SRILANKA
        BRAZIL
        AMERICA
        CANADA
        GERMANY
        INDONESIA
    }

`;



module.exports={typeDefs};