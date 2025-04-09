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

    User:{
        age:()=>{
            return userMockDataList.find(user => user.age >= 10 && user.age <=40);
        }
    }
}


module.exports ={resolvers};