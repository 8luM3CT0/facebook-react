import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { useStateValue } from "./StateProvider";
import Widgets from "./Widgets";

//path = "/covid"
import Covid from './covid-folder/Covid'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//path ="/marketplace"
import MSidebar from "./marketplace-folder/MSidebar";
import MFeed from "./marketplace-folder/MFeed";

//path = "/chat"
import ChatSidebar from "./chat-folder/ChatSidebar";
import ChatPage from "./chat-folder/ChatPage";

//path = "/page"
import PageSidebar from "./pages-folder/PageSidebar";
import PageList from "./pages-folder/PageList";

//path = "/group"
import GroupSidebar from "./group-folder/GroupSidebar";
import GroupFeed from "./group-folder/GroupFeed";
import VidSidebar from "./videos-folder/VidSidebar";
import VidFeed from "./videos-folder/VidFeed";

//path ="/video"

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
                    <Route path="/chat/:chatId">
                        <ChatSidebar />
                        <ChatPage />
                    </Route>
                  <Route path="/page">
                      <PageSidebar />
                      <PageList />
                  </Route>
                  <Route path="/group">
                    <GroupSidebar />
                    <GroupFeed />
                  </Route>
                  <Route path="/video">
                      <VidSidebar />
                      <VidFeed />
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
