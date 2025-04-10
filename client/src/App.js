import './App.css';
import {ApolloClient,InMemoryCache,ApolloProvider,useQuery} from "@apollo/client"
import DisplayUserData from "./DisplayUserData"
import { DisplayMovieData } from "./DisplayMovieData"




function App() {
  
  //ApolloClient -> Connection establishment
  const apolloClient =new ApolloClient({
    cache: new InMemoryCache(),
    uri:"http://localhost:4000/graphql"  //should provide the graphQL URL for the server
  })




  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">
        <h1>List of users</h1>
          <DisplayUserData></DisplayUserData>
          <br/>
          <br/>
          <br/>
        <h1>List of movies</h1>
          <DisplayMovieData></DisplayMovieData>

      </div>
    </ApolloProvider>
  );
}

export default App;
