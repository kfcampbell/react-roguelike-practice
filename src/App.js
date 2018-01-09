import React, { Component } from 'react';
import './App.css';
import tileMap from './tiles/map';

class App extends Component {

  componentDidMount(){
    document.addEventListener('keydown', this.handleKeyPress, false);
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKeyPress, false);
  }

  getTileMap = () => {
    return tileMap.tileMap;
  }

  transformElement = (element) => {
    var elem = ' ';
    switch(element){
      case 1:
        elem = '#';
        break;
      case 0:
        elem = ' ';
        break;
      case 2:
        elem = '@';
        break;
      default:
        elem = ' ';
    }
    return elem;
  }

  handleKeyPress = (event) => {
    if(event.key === 'w'){
      console.log('w');
    } else if(event.key === 's') {
      console.log('s');
    } else if(event.key === 'a') {
      console.log('a');
    } else if(event.key === 'd') {
      console.log('d');
    }
  }

  render() {
    var tileMap = this.getTileMap();
    var renderElement = this.transformElement;
    var handleKeyPress = this.handleKeyPress;
    return (
      <div onKeyPress={handleKeyPress}>
        {tileMap.map(function (arr, index) {
          console.log(renderElement('1'));
          return (<div className='mapRow' key={index}>
            {arr.map(function (element, ind) {
              return <span className='mapElement' key={ind}>{renderElement(element)}</span>;
            })}
          </div>);
        })}
      </div>
    );
  }
}

export default App;
