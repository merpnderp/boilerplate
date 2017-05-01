import React, { Component } from "react";
import { connect } from "react-redux";
//import logo from './logo.svg';
import "./App.css";
import NavBar from "./components/NavBar";
import "./test";
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

class App extends Component {
  //constructor(props){
  //		super(props);
  //	props.dispatch(getCurrentUser());
  //	}
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
        {/*	
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
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todos: state.todos };
}

export default connect(mapStateToProps)(App);
