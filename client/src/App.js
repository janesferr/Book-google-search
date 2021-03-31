import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedBooks from "./pages/SaveBooks";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Books from "./pages/Books";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          
            <Route exact path="/" component={Books}>
            
          </Route>
  
          <Route>
          <Route exact path="/save" component={SavedBooks} />
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
