import React, { Component } from 'react';
import {setTest} from '../mainActions';

import NavBar from './NavBar';
import MiniProfile from './MiniProfile';
import About from './About';
//import MiniPhotos from './MiniPhotos';
import MediaStream from './MediaStream';
import Growl from './Growl';
import Advertisement from './Advertisement';
import Friends from './Friends';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    props.dispatch(setTest('hi'));
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div className="container p-t-md">
          <div className="row">
            <div className="col-md-3">
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
      </div>
    );
  }
}

export default App;
