import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Snake from './AppSnake.js';

class Board extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            percentageWidth: props.percentageWidth,
            width: props.width,
            height: props.height,
            borderWidth: props.width / 50,
            flag: 0,
        }
        /*
                let percentageWidth = 65;
        let width =
          document.getElementById('root').parentElement.offsetWidth *
          (percentageWidth / 100);
        width -= width % 30;
        if (width < 30) width = 30;
        let height = (width / 3) * 2;
        let blockWidth = width / 30;
        let blockHeight = height / 30;
        */
    }

    componentDidMount() {
        /*setInterval(() => {
            if(this.state.flag===1){
                this.setState({flag: 0})
            } else{
                this.setState({flag: 1})
            }
          }, 1000)*/
    }

    componentDidUpdate() {

    }

    static getDerivedStateFromProps(props, state) {
        return {percentageWidth: props.percentageWidth,
                width: props.width,
                height: props.height,}
    }
//#996600
    render() {
        return(
        <div
        id='GameBoard'
        style={{
          width: this.state.width,
          height: this.state.height,
          borderWidth: this.state.borderWidth,
          borderColor: "#0d0d0d",
          background: "#0d0d0d",
        }}>
            
         <Snake width={this.state.width} height={this.state.height} borderWidth ={this.state.borderWidth} />
            
        </div>
        )
    }
}

export default Board;