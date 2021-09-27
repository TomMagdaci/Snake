import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
  constructor(){
  super();
  // Initiate state

/*}
static getDerivedStateFromProps(props, state) {*/
  const grid = [];
  const food = this.getRandomGrid();
  console.log("row is:" + food.row);
  console.log("col is" + food.col);
  for (let row = 0; row < this.state.rows; row++) {
    for (let col = 0; col < this.state.cols; col++) {
      const isFood = (food.row === row && food.col === col);
      grid.push({
        row,
        col,
        isFood,
      })
    }
  }
  this.state = {
    rows: 10,
    cols: 10,
    grid: [],
  };
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
    const gridItems = this.state.grid.map((grid) => {
      return <div 
        key={grid.row.toString() + '-' + grid.col.toString()} 
        className={grid.isFood ? 'grid-item is-food' : 'grid-item'} ></div>
    })
    return (
      <div className="snake-container">
        <div className="grid">{gridItems}</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));