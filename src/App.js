import React, { Component } from 'react';
import './App.css';
import tileMap from './tiles/map';

class App extends Component {
  constructor() {
    super();
    var tiles = this.getTileMap();

    for (var i = 0; i < tiles.length; i++) {
      for (var j = 0; j < tiles[i].length; j++) {
        if (tiles[i][j] === 2) {
          this.state = {
            tileMap: tiles,
            playerPosition: {
              x: j,
              y: i
            }
          }
          return;
        }
      }
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress, false);
  }

  getTileMap = () => {
    return tileMap.tileMap;
  }

  transformElement = (element) => {
    var elem = ' ';
    switch (element) {
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
    var tiles = this.state.tileMap;
    var pos = this.state.playerPosition;
    if (event.key === 'w') {
      if (tiles[pos.y - 1][pos.x] === 0) {
        tiles[pos.y][pos.x] = 0;
        tiles[pos.y - 1][pos.x] = 2;
        this.setState({
          tileMap: tiles,
          playerPosition: {
            y: pos.y - 1,
            x: pos.x
          }
        });
      }
    } else if (event.key === 's') {
      if (tiles[pos.y + 1][pos.x] === 0) {
        tiles[pos.y][pos.x] = 0;
        tiles[pos.y + 1][pos.x] = 2;
        this.setState({
          tileMap: tiles,
          playerPosition: {
            y: pos.y + 1,
            x: pos.x
          }
        });
      }
    } else if (event.key === 'a') {
      if (tiles[pos.y][pos.x - 1] === 0) {
        tiles[pos.y][pos.x] = 0;
        tiles[pos.y][pos.x - 1] = 2;
        this.setState({
          tileMap: tiles,
          playerPosition: {
            y: pos.y,
            x: pos.x - 1
          }
        });
      }
    } else if (event.key === 'd') {
      if (tiles[pos.y][pos.x + 1] === 0) {
        tiles[pos.y][pos.x] = 0;
        tiles[pos.y][pos.x + 1] = 2;
        this.setState({
          tileMap: tiles,
          playerPosition: {
            y: pos.y,
            x: pos.x + 1
          }
        });
      }
    }
  }

  render() {
    var tileMap = this.state.tileMap;
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
