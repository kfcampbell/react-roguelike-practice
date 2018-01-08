import React, { Component } from 'react';
import './App.css';
import tileMap from './tiles/map';

class App extends Component {

  getTileMap = () => {
    return tileMap.tileMap;
  }

  parseElement = (element) => {
    var elem = ' ';
    switch(element){
      case '1':
        elem = '#';
      case '0':
        elem = ' ';
      case '@':
        elem = '@';
      default:
        elem = ' ';
    }
    return elem;
  }

  render() {
    var tileMap = this.getTileMap();
    var local = this; // super hacky, does not work.
    return (
      <div>
        {tileMap.map(function (arr, index) {
          return (<div className='mapRow' key={index}>
            {arr.map(function (element, ind) {
              return <span className='mapElement' key={ind}>{local.parseElement(element)}</span>;
            })}
          </div>);
        })}
      </div>
    );
  }
}

export default App;
