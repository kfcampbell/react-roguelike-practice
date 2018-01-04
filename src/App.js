import React, { Component } from 'react';
import './App.css';

class App extends Component {

  generateTileMap = () => {
    var exampleArr = [[1, 1, 1, 1, 1],
                     [0, 0, 0, 0, 1],
                     [0, 0, 1, 1, 1],
                     [0, 0, 0, 0, 1],
                     [1, 1, 1, 1, 1]];
    return exampleArr;
  }

  generateRows = () => {
    return this.generateTileMap(rows => {
      var row = rows.map(cell => <td>{cell}</td>);
      return <tr>{row}</tr>;
    });
  }

  render() {
    return (
      <table>{this.generateRows()}</table>
      /*<div>
        {tileMap.map(function(arr, index){
          arr.map(function(element, index){
            return <div className='map' key={index}>{element}</div>;
          });
        })}
      </div>*/
    );
  }
}

export default App;
