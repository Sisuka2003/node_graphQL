import React from "react";
import { useQuery,gql } from "@apollo/client";


const GET_ALL_MOVIES =gql`
    query getAllMovies{
        movies{
            name
            releasedYear
            rating
        }
    }
`





function DisplayMovieData(){

    const {data: movieData,loading,error} =useQuery(GET_ALL_MOVIES);

    if(loading){
        return <h1>Page is still loading...</h1>
    }

    if(!movieData){
        return <h1>No Data Recieved For Movie</h1>
    }

    if(error){
        return <h1>Error Occurred when movie retrieval</h1>
    }

    return <div>
        {movieData && movieData.movies.map((movie)=>{
            return (
                <div>
                    <p>Name : {movie.name}</p>
                    <p>release year : {movie.releasedYear}</p>
                    <p>ratings : {movie.rating}</p>
                </div>
            )
        })}
    </div>
    
}


export {DisplayMovieData}