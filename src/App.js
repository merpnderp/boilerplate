import React, { Component } from "react";
import { observer } from 'mobx-react';
//import logo from './logo.svg';
import NavBar from "./components/NavBar";
import Signup from './components/Signup';
import Login from './components/Login';

function renderCurrentView(store) {
  const view = store.currentView;
  switch (view.name) {
    case "home":
      return (
        <div>
          <NavBar />
        </div>
      )
    case "overview":
      return <DocumentOverview view={view} store={store} />
    case "document":
      return <Document view={view} store={store} />
    case "login":
      return (
        <div className="container-fluid container-fill-height">
          <div className="container-content-middle">
            <Login showForm={true} />
          </div>
        </div>
      )
    case "signup":
      console.log("rendering Signup");
      return <Signup />
  }
}

export const App = observer(({ store }) => (
  <div>
    {renderCurrentView(store)}
  </div>
))

/*
import MiniProfile from "./components/MiniProfile";
import About from "./components/About";
import Growl from "./components/Growl";
import Advertisement from "./components/Advertisement";
import Footer from "./components/Footer";
import Friends from "./components/Friends";
import MediaStream from "./components/MediaStream";
*/
//import {getCurrentUser} from './mainAR';

/*	
        <div className="container pt-4">
          <div className="row">
						<div className="col-lg-3">
              <MiniProfile />
              <About />
            </div>
            <div className="col-md-6">
              <MediaStream />
            </div>
            <div className="col-md-3">
              <Growl />
              <Advertisement />
              <Friends />
              <Footer />
            </div>
          </div>
        </div>
					*/
