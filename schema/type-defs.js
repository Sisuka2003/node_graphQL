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

#--------------------- Fetching data from the database / file [mocked] -----------------------------------------------------------
    type Query{
        users: [User!]!               # Getting all user records
        usersByAge(age: Int!): [User] # Getting the users for the given age 
        userById(id: ID!): User!      # Getting the user record from user ID


        movies: [Movie!]!                            # Getting all movie records
        movieById(id:ID!): Movie!                 # Getting a movie record from ID
        movieByYear(releasedYear:String!): [Movie!]! # Getting movie records from released Year

    }

#--------------------- ADD,UPDATE,DELETE data from and to the database / file [mocked] -----------------------------------------------------------


    input AddNewUserInput{
        name:String!
        username:String!
        age:Int =18                       #  If age is not given, default will be 18
        nationality:Nationality =SRILANKA #  If nationality is not given, default will be SRILANKA
    }


    input updateUsernameInput{
        id:ID!
        newUsername:String!
        previousUsername:String!
    }

    type Mutation{
        createUser(input: AddNewUserInput!):User
        updateUsername(input: updateUsernameInput!):User

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