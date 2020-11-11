import React, {useState} from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Login from "./Login";
import {useStateValue} from "./StateProvider"

function App() {
  const [{user}, dispatch] = useStateValue(); // Sreyas

  return(
    //BEM naming convention
    <div className="app"> 
      {/* Sreyas*/}
      {!user ?(
        <Login />
      ):(
      /* Sreyas*/
      <div className="app__body">
        <Router>
          <Sidebar />
          
          <Switch>
            
            <Route path="/rooms/:roomID">
              <Chat />
            </Route>
            
            <Route path="/">
             <Chat />
            </Route>

          </Switch>

        </Router>
      </div>
      )}
    </div> 
  );
}
export default App;
