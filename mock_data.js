
const userMockDataList =[
    {
        id:1,
        name:"Sisuka Weerasinghe",
        age:21,
        nationality:"SRILANKA",
        username:"sisukaw",
        friends:[
            {
                id:2,
                name:"Gayan gamage",
                age:32,
                nationality:"SRILANKA",
                username:"gayyag"
            },
            {
                id:3,
                name:"Ayomal Udayasiri",
                age:56,
                nationality:"INDONESIA",
                username:"udaya@ayo"
            }
        ]
    },
    {
        id:2,
        name:"Gayan gamage",
        age:32,
        nationality:"SRILANKA",
        username:"gayyag",
        friends:[
            {
                id:1,
                name:"Sisuka Weerasinghe",
                age:21,
                nationality:"SRILANKA"
            },
            {
                id:3,
                name:"Ayomal Udayasiri",
                age:56,
                nationality:"INDONESIA",
                username:"udaya@ayo"
            }
        ]
    },
    {
        id:3,
        name:"Ayomal Udayasiri",
        age:56,
        nationality:"INDONESIA",
        username:"udaya@ayo"
    },
    {
        id:4,
        name:"Vanikara raveindu jayasekara",
        age:32,
        nationality:"AMERICA",
        username:"jay"
    }
]

const movieMockedDataList =[
    {
        id:1,
        name:"Sisu",
        rating:"21",
        releasedYear:"2020",
    },
    {
        id:2,
        name:"Black Panther",
        rating:"21",
        releasedYear:"2021",
    },
    {
        id:3,
        name:"Amazon",
        rating:"21",
        releasedYear:"2024",
    },
    {
        id:4,
        name:"Gorge",
        rating:"21",
        releasedYear:"2025",
    }
]



module.exports ={userMockDataList,movieMockedDataList};