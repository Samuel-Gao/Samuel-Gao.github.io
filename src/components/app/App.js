import React, { Component } from 'react';
import './App.css';

import Header from './../header/header';
import AboutMe from './../aboutMe/aboutMe';
import Skills from './../skills/skills';
import Philosophy from './../philosophy/philosophy';
import Projects from './../projects/projects';
import Footer from './../footer/footer';

class App extends Component {

  render() {
    return (
      <div className="my-portfolio">
        <Header />
        <AboutMe/>
        <Philosophy classes="grey-field" />
        <Projects/>
        <Footer/>
      </div>
    );
  }
}

export default App;
