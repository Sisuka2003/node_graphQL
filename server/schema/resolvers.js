const {userMockDataList,movieMockedDataList}=require('../../mock_data');
// const _ = require("lodash");


const resolvers ={


    Query:{
        users(){                          // can define the resolver as user() or user:()=> 
            return userMockDataList;
        },
        userById:(parent,args)=>{
            const id = args.id
            return userMockDataList.find(user => user.id ==id);
        },
        usersByAge:(parent,args)=>{
            const age =args.age
            return userMockDataList.filter( user => user.age == age);
        },
        movies:()=>{
            return movieMockedDataList;
        },
        movieById:(parent,args)=>{
            const {id} =args;
            return movieMockedDataList.find(movie => movie.id == id);
        },
        movieByYear:(parent,args)=>{
            const {releasedYear} =args;
            return movieMockedDataList.filter(movie => movie.releasedYear == releasedYear);
        }
    },

    Mutation:{
        createUser:(parent,args)=>{
                const user =args.input
                console.log(user);
                let lastId = userMockDataList[userMockDataList.length-1].id;
                user.id = ++lastId;
                userMockDataList.push(user);
                return user;
        },
        updateUsername:(parent,args)=>{
            const {id,newUsername,previousUsername} = args.input
            let updatedUserRecord;

            const user = userMockDataList.find(user => user.id.toString() === id);


            if(!user){
                console.log("user not found");
                return null;
            }


            console.log(user.username)
            if(user.username !== previousUsername){
                console.log("Previous username invalid");
                return null;
            }


            console.log("User updating")
            user.username =newUsername
            updatedUserRecord =user;
            
            console.log("User updated")
            return updatedUserRecord;

        },
       //TODO ADD THE USER DELETING PART
    }
}


module.exports ={resolvers};