import React from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import SidebarChat from "./SidebarChat";

function App() {
  return(
    //BEM naming convention
    <div className="app">
      <div className="app__body">
        <Router>
          <Switch>
          
            <Route path="/rooms/:roomID">
                 <Sidebar /> 
            </Route>
            <Route path="/">
             <Chat />
             <SidebarChat />  
            </Route>

          </Switch>
        </Router>
      </div>
    </div>
  );
}
export default App;
