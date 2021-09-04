import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import API, { graphqlOperation } from "@aws-amplify/api";
import { listTireCheckinfos } from "./graphql/queries";

async function test() {
  API.graphql(graphqlOperation(listTireCheckinfos)).then((data) => {
    console.log(data)
  });
}

function App() {
  test();
  return (
    <Router>
      <Route path="/">
        <Home />
      </Route>
    </Router>
  );
}

export default App;
