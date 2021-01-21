import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { useStateValue } from "./StateProvider";
import Widgets from "./Widgets";

import Covid from './covid-folder/Covid'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MSidebar from "./MSidebar";
import MFeed from "./MFeed";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
      {!user ? (
        <Login />
      ) : (
            <>
            <Header />
                <div className="app__body">
                  <Switch>
                    <Route path="/covid">
                        <Covid />
                    </Route>
                    <Route path="/marketplace">
                         <MSidebar />
                          <MFeed />
                    </Route>
                <Route path="/">
                    <Sidebar />
                      <Feed />
                      <Widgets />
                </Route>
                </Switch>
              </div>
          </>

      )}
      </Router>
    </div>
  );
}

export default App;
