import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import { Route, Redirect } from "react-router-dom";
import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import Photos from './components/Header/Photos/Photos';
import Contacts from './components/Header/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/19-homework">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/photos" component={Photos} />
        <Route exact path="/contacts" component={Contacts} />
      </div>
    </div>
  );
}

export default App;
