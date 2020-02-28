import React from 'react';
import './App.scss';
import {Header} from "./Header/Header";
import {Posts} from "./Posts/Posts";
import {Footer} from "./Footer/Footer";
import {PageTitle} from "./PageTitle/PageTitle";
import {Create} from "./Create/Create";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function App() {
  return (
    <body>
      <Router>
        <Header />
          <Switch>
            <Route path="/posts">
                <PageTitle title ={"News Feed"}/>
              <Posts/>
            </Route>
  
            <Route path="/create">
                <PageTitle title={"Create New Post"}/>
                <Create />
            </Route>
          </Switch>
        <Footer />
      </Router>
    </body>
  );
}

export default App;
