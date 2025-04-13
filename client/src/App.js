import './App.css';
import {ApolloClient,InMemoryCache,ApolloProvider,useQuery} from "@apollo/client"
import UserOperations from "./UserOperationsFrontend"
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
        <p>==================================================================================</p>
        <h1>User Operations----------//</h1>
          <UserOperations></UserOperations>
          <br/>
          <br/>
          <br/>
        <p>==================================================================================</p>
        <h1>Movie Operations----------//</h1>
          <DisplayMovieData></DisplayMovieData>

      </div>
    </ApolloProvider>
  );
}

export default App;
