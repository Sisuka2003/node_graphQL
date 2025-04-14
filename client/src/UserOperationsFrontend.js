import React, { useState } from "react";
import {useQuery,useLazyQuery,gql, useMutation} from "@apollo/client"


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

const FIND_FROM_USER_ID_WITH_FRAGMENTS = gql`
   fragment GetUserDetailsWhenFindById on User{
        id
        name
        nationality
        age
        username
   }
`;

const QUERY_USER_BY_ID = gql`
    query GetUserById($id: ID!){
        userById(id: $id){
          ...GetUserDetailsWhenFindById
         }
    }
    ${FIND_FROM_USER_ID_WITH_FRAGMENTS}
`;




const ADD_NEW_USER = gql`
    mutation CreateUser($input: AddNewUserInput!){
        createUser(input: $input){
            name
            age
            nationality
            username
        }
    }
`;




function UserOperations(){

    //Get All Users
    const {data, loading,error } = useQuery(QUERY_ALL_USERS);



    //Get user by id
    const [fetchUser, {data:userSearchedData,error:userSearchedError}] = useLazyQuery(QUERY_USER_BY_ID);
    //----->input actions for the user searching by ID
    const [userSearched, setUserSearched] =useState("")
    
    //Add new user record
    const [name, nameVal] =useState("");
    const [username, usernameVal] =useState("");
    const [age, ageVal] =useState(0);
    const [nationality, nationalityVal] =useState("");
    const [addNewUserMutation] = useMutation(ADD_NEW_USER);

    console.log("Wada allima -> awurudu 2025")
//-----------------------------------------------------------------------------
    
    
    return( 
    <div>
        <br/>
        <br/>
        <h1>------ Get all Users</h1>
        <select>
        {data && data.users.map((user)=>{
            return (
                    <option>`name :{user.name} , nationality: {user.nationality} ,age:{user.age} ,username:{user.username}`</option>
                );
            })}
            </select>


        <p>----------------------------------------------------------------------------------------------</p>
        <p>----------------------------------------------------------------------------------------------</p>


        <br/>
        <br/>
        <h1>------ Find User information by Id</h1>
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


        <p>----------------------------------------------------------------------------------------------</p>
        <p>----------------------------------------------------------------------------------------------</p>


        <br/>
        <br/>
        <h1>------ Create New User</h1>
        <div>
            <input type="text" placeholder="Please enter the name" required="true" onChange={(event)=>{nameVal(event.target.value)}}/>
            <input type="text" placeholder="Please enter the username" required="true" onChange={(event)=>{usernameVal(event.target.value)}}/>
            <input type="number" placeholder="18" onChange={(event)=>{ageVal(event.target.value)}} max={100}/>
            <input type="text" placeholder="SRILANKA" onChange={(event)=>{nationalityVal(event.target.value.toUpperCase())}}/>
            <button onClick={()=>{
                addNewUserMutation({
                    variables: {
                        input: {
                            name, username, age: Number(age), nationality
                        }
            }});
            }}>Add user</button>
        </div>

        

    </div>
    );
}


export default UserOperations;