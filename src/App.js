import React from 'react';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FriendDetails from './Component/FriendDetails/FriendDetails';
import Home from './Component/Home/Home';
import NoMatch from './Component/NoMatch/NoMatch';

function App() {
  



  
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>

        </Route>
        <Route path="/friend/:FriendId">

        <FriendDetails></FriendDetails>
        </Route>


        <Route exact path="/">
          <Home />
        </Route>
       
          <Route path="*">
            <NoMatch></NoMatch>
           
          </Route>
      </Switch>
 


    </Router>
  );
}

export default App;
