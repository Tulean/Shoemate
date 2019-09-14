import React, { Component } from 'react';
import Carousel from './carousel';
import '../../css/home.css';
class home extends Component {
  render() {
    return (
      <div className="home">
        <Carousel />
      </div>
    );
  }
}

export default home;
