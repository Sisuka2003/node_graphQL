const {mockDataList}=require('../mock_data');



const resolvers ={


    Query:{
        users(){
            return mockDataList
        }
    }
}


module.exports ={resolvers};