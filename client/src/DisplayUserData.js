import React, { useState } from "react";
import {useQuery,useLazyQuery,gql} from "@apollo/client"
import { identity } from "lodash";


const QUERY_ALL_USERS = gql`
    query getAllUsers{
        users{
          id
          name
          nationality
          age
          username
        }
    }
`;


const QUERY_USER_BY_ID = gql`
    query GetUserById($id: ID!){
        userById(id: $id){
          id
          name
          nationality
          age
          username
        }
    }
`;



function DisplayUserData(){

    const [userSearched, setUserSearched] =useState("")


    const {data, loading,error } = useQuery(QUERY_ALL_USERS);
    const [fetchUser, {data:userSearchedData,error:userSearchedError}] = useLazyQuery(QUERY_USER_BY_ID);

    if(loading){
        return <h1>Data is loading</h1>
    }

    if(data){
        console.log(data)
    }

    if(error){
        return <h1>OOps Something went wrong!</h1>
    }
    
    
    
    return( 
    <div>
        {data && data.users.map((user)=>{
            return (
            <div>
                <p>name : {user.name}</p>
                <p>nationality : {user.nationality}</p>
                <p>age : {user.age}</p>
                <p>username : {user.username}</p>
                </div>);
        })}
        <br/>
        <h1>Find User information by Id</h1>
        <div>
            <input type="text" placeholder="Please enter the userid" onChange={(event)=> {setUserSearched(event.target.value)}}/>
            <button onClick={()=>{
                fetchUser({
                    variables:{
                        id: userSearched,
                    }
                });
            
            }}>fetch data</button>
        </div>
        <br/>
        <div>
            {
                userSearchedData && 
                <div>
                    <h1>user's name : {userSearchedData.userById.name}</h1>
                    <h1>user's nationality : {userSearchedData.userById.nationality}</h1>
                    <h1>user's username : {userSearchedData.userById.username}</h1>
                </div>
            }
        </div>

    </div>
    );
}


export default DisplayUserData;