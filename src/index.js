import React from 'react';
import ReactDOM from 'react-dom';
import Board from './AppBoard.js';
import './App.css';

class App extends React.Component {
  constructor(){
  super();
  // Initiate state
  this.state = {
    rows: 10,
    cols: 10,
    grid: [],
  };

  //this.setState({ grid: grid })
}

getRandomGrid() {
  return {
    row: Math.floor((Math.random() * this.state.rows)),
    col: Math.floor((Math.random() * this.state.cols))
  }
}
/*
componentDidMount() {
  setTimeout(() => {
    const food = this.getRandomGrid();
  }, 1000)
}*/
  
  render () {
        // Game size initialization
        
        let percentageWidth = 60;
        let width =
          document.getElementById('root').parentElement.offsetWidth *
          (percentageWidth / 100);
        width -= width % 30;
        if (width < 30) width = 30;
        let height = (width / 3) * 2;
        let blockWidth = width / 30;
        let blockHeight = height / 30;

    /*let snake = []
    let snakeHead = { Xpos: width / 2, Ypos: height / 2 };
    snake.push(snakeHead);
    snake.push({Xpos: width/2 -1, Ypos: height/2});*/
    return (
    <div>
      <Board percentageWidth="65" width={width} height={height} />
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));