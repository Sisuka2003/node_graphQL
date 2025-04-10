const {userMockDataList,movieMockedDataList}=require('../mock_data');
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
            userMockDataList.forEach((user)=>{
                if(user.id === id && user.username === previousUsername){
                    console.log("User updated")
                    user.username =newUsername
                    updatedUserRecord =user;
                }
            });

            return updatedUserRecord;

        }
    }
}


module.exports ={resolvers};