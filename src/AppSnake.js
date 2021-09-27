import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

//26.9 19:15
class Snake extends React.Component {
    constructor(props){
        super(props)
        let width = props.width;
        console.log(width);
        let height = props.height;
        //balagan!:
        let borderWidth = props.borderWidth
        let blockWidthTemp = borderWidth;
        let blockHeightTemp = borderWidth;
        //
        let snakeheadTemp = {Xpos: 19*width / 20, Ypos: height / 2};
        let snakeTemp = []
        snakeTemp.push(snakeheadTemp);
        snakeTemp.push({Xpos: snakeheadTemp.Xpos, Ypos: snakeheadTemp.Ypos+blockWidthTemp});////
        snakeTemp.push({Xpos: snakeheadTemp.Xpos+blockWidthTemp, Ypos: snakeheadTemp.Ypos+blockWidthTemp})

        /*let appleXpos = Math.floor(Math.random() * ((width - blockWidthTemp) / blockWidthTemp + 1)) *
        blockWidthTemp
        let appleYpos = Math.floor(Math.random() * ((height - blockWidthTemp) / blockWidthTemp + 1)) *
        blockWidthTemp*/

        let apple = []
        /*let appleXpos = 19*width / 20;
        let appleYpos = height / 5;
        while(appleYpos == snakeTemp[0].Ypos){
            appleYpos = Math.random * (height-2*borderWidth) + borderWidth;
        }
        let apple2Xpos = 1*width / 20;
        let apple2Ypos = height / 5;
        while(apple2Ypos == snakeTemp[0].Ypos){
            apple2Ypos = Math.random * (height-2*borderWidth) + borderWidth;
        }
        apple.push({Xpos: appleXpos, Ypos: appleYpos});
        apple.push({Xpos: apple2Xpos, Ypos: apple2Ypos});
        apple.push({Xpos: 15*width / 20, Ypos: apple2Ypos});
        apple.push({Xpos: 10*width / 20, Ypos: apple2Ypos});*/
        apple = this.resetAppleArr(6,snakeTemp[0],height,width,borderWidth);
        let speed = borderWidth/5;
        let easy=4;
        let med=2;
        let high=1;
        this.state = {
            boardWidth: width,
            boardHeight: height,
            snakehead: snakeheadTemp,
            snake: snakeTemp,
            blockWidth: blockWidthTemp,
            blockHeight: blockHeightTemp,
            borderWidth: borderWidth,
            direction: {x: 0, y: -speed},////
            apple: apple,
            speed: speed,
            refresh: 10,
            gameMode: easy,
        }

        //this.handlekeyDown = this.handlekeyDown.bind(this);
        
    }

    resetAppleArr = (numOfApp, snakeHead,boardHeight, boardWidth, blockWidth) =>{
        let apple =[];
        for(let i=0; i<numOfApp; i++){
            let appleXpos = Math.floor(Math.random() * ((boardWidth - blockWidth) / blockWidth + 1)) *
            blockWidth;
            let appleYpos = Math.floor(Math.random() * ((boardHeight - blockWidth) / blockWidth + 1)) *
            blockWidth;
            while(appleYpos == snakeHead.Ypos){
                appleYpos = Math.floor(Math.random() * ((boardHeight - blockWidth) / blockWidth + 1)) *
                blockWidth;
            }
            apple.push({Xpos: appleXpos, Ypos: appleYpos});//
        }
        return apple;
    }

    resetGame = ()=> {
        alert("GameOver... your score was: "+ this.state.snake.length+"\n" +"Try again!")
        let snake = this.state.snake;
        let size = snake.length;
        while(size>0){
            snake.pop();
            size--;
        }
        let snakehead = {Xpos: 19*this.state.boardWidth / 20, Ypos: this.state.boardWidth / 2};
        snake.push(snakehead);
        let newDirection = {x: 0, y: -this.state.speed};
        this.setState({snake: snake, direction: newDirection})
    }

    moveInSpecDirection = () => {
        let snake = this.state.snake;
        let currXHead= snake[0].Xpos;
        let currYHead = snake[0].Ypos;
        snake[0].Xpos+=this.state.direction.x;//
        snake[0].Ypos+=this.state.direction.y;
        let flag =0;
        if((snake[0].Xpos > this.state.boardWidth-this.state.borderWidth) &&
        (this.state.direction.x >= 0) && (flag==0)){
            snake[0].Xpos=0;
            flag=1;
        }//
        if((snake[0].Ypos > this.state.boardHeight-this.state.borderWidth) &&
         (this.state.direction.y >=0) && (flag==0)){
            snake[0].Ypos=0;
            flag=1;
         }

        if((snake[0].Xpos < 0) &&
        (this.state.direction.x<0) && (flag==0)){
            snake[0].Xpos= this.state.boardWidth-this.state.borderWidth;
            flag=1;
        }

        if((snake[0].Ypos < 0) &&
        (this.state.direction.y<0) && (flag==0)){
            snake[0].Ypos= this.state.boardHeight-this.state.borderWidth;
            flag=1;
        }

        for(let i=snake.length-1; i>=1; i--){
            if(i==1){
                snake[i].Xpos=currXHead;////
                snake[i].Ypos=currYHead;
                continue;
            }
            snake[i].Xpos=snake[i-1].Xpos;
            snake[i].Ypos=snake[i-1].Ypos;
        }

        /*for(let i=1; i<snake.length;i++){

            snake[i].Xpos
        }*/

        this.setState({snake: snake})
    }

    retNewApp = () => {
        let width = this.state.boardWidth;
        let height = this.state.boardHeight;
        let blockWidth = this.state.blockWidth;
        let appleXpos = Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
        blockWidth
        let appleYpos = Math.floor(Math.random() * ((height - blockWidth) / blockWidth + 1)) *
        blockWidth
        while(appleYpos == this.state.snake[0].Ypos){
            appleYpos = Math.floor(Math.random() * ((height - blockWidth) / blockWidth + 1)) *
            blockWidth
        }
        return {Xpos: appleXpos, Ypos: appleYpos};
    }

    appleEatenFollowingCommands = (j) =>{
        let snake = this.state.snake;
        let direction = this.state.direction;
        let blockWidth = this.state.blockWidth;
        let apple = this.state.apple;
        let i=1;
        if (direction.x!=0){
            let k = -1 * (direction.x/Math.abs(direction.x));
            while(i<=this.state.gameMode){
                snake.push({Xpos: snake[snake.length-1].Xpos+k*blockWidth, Ypos: snake[snake.length-1].Ypos});
                ++i;
            }
            /*if(direction.x<0){
                while(i<=this.state.gameMode){
                    snake.push({Xpos: snake[snake.length-1].Xpos+blockWidth, Ypos: snake[snake.length-1].Ypos});
                    ++i;
                }
            } else{
                while(i<=this.state.gameMode){
                    snake.push({Xpos: snake[snake.length-1].Xpos-blockWidth, Ypos: snake[snake.length-1].Ypos});
                    i++;
                }
            }*/
        } else{ //direction.y!=0
            let k = -1 * (direction.y/Math.abs(direction.y));
            while(i<=this.state.gameMode){
                snake.push({Xpos: snake[snake.length-1].Xpos, Ypos: snake[snake.length-1].Ypos+k*blockWidth});
                i++;
            }
            /*if(direction.y<0){
                while(i<=this.state.gameMode){
                    snake.push({Xpos: snake[snake.length-1].Xpos, Ypos: snake[snake.length-1].Ypos+blockWidth});
                    i++;
                }
            } else{
                while(i<=this.state.gameMode){
                    snake.push({Xpos: snake[snake.length-1].Xpos, Ypos: snake[snake.length-1].Ypos-blockWidth});
                    i++;
                }
            }*/
        }
        let newApple = this.retNewApp();
        apple[j]=newApple;
        this.setState({snake: snake, apple: apple})
    }

    checkIfAppleEaten = () =>{
        let snake = this.state.snake;
        let apple = this.state.apple;
        let blockWidth = this.state.blockWidth;
        for(let i=0; i<apple.length; i++){
            if(Math.abs(snake[0].Xpos- apple[i].Xpos)<3*blockWidth/4 &&
                Math.abs(snake[0].Ypos- apple[i].Ypos) < 3*blockWidth/4){
                this.appleEatenFollowingCommands(i);
                }////
        }
    }

    tryEatSnake = () => {
        let snake = this.state.snake;
        let size = snake.length;
        let blockWidth = this.state.blockWidth;
        for (let i=1; i<size;i++ ){
            if (Math.abs(snake[0].Xpos- snake[i].Xpos)<blockWidth/6 &&
                Math.abs(snake[0].Ypos- snake[i].Ypos) < blockWidth/6){
                    this.resetGame();
                    return;
                }
        }
    }

    gameLoop = () =>{
        setInterval(() => {
            this.moveInSpecDirection()
            //this.checkIfAppleEaten()
            this.tryEatSnake()
          }, this.state.refresh)
          setInterval(() => {
            this.checkIfAppleEaten()
          }, this.state.refresh/10)
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
        this.gameLoop();
    }

    /*componentDidUpdate() {
    }*/

    replaceHeadAndTail = () =>{
        let snake =this.state.snake;
        let iters = Math.floor(snake.length/2);
        let size = snake.length;
        for(let i=0; i<iters; i++){
            let temp = snake[i];
            snake[i]=snake[size-1-i];
            snake[size-1-i]=temp;
        }
        return snake;
    }

    goUp = () => {
        let direction= this.state.direction;
        let flag =0;
        let snake=[]
        if(direction.y<0){
            return;
        }
        if(direction.y>0) { //right now its going down
            snake=this.replaceHeadAndTail();
            flag=1
        }
        //let blockWidth = this.state.blockWidth;
        direction.x = 0;
        direction.y = -this.state.speed;
        if(flag==1){
            this.setState({snake:snake, direction: direction});
        } else{
            this.setState({direction: direction}); 
        }
        return;
    }
    goDown = () => {
        let direction= this.state.direction;
        let flag =0;
        let snake=[]
        if(direction.y>0){
            return;
        }
        if(direction.y<0){
            snake=this.replaceHeadAndTail();
            flag=1
        }
        //let blockWidth = this.state.blockWidth;
        direction.x = 0;
        direction.y = this.state.speed;
        if(flag==1){
            this.setState({snake:snake, direction: direction});
        } else{
            this.setState({direction: direction}); 
        }
    }
    goLeft = () => {
        let direction= this.state.direction;
        let flag =0;
        let snake=[]
        if(direction.x<0){
            return;
        }
        if(direction.x>0){
            snake=this.replaceHeadAndTail();
            flag=1
        }
        //let blockWidth = this.state.blockWidth;
        direction.x = -this.state.speed;
        direction.y = 0;
        if(flag==1){
            this.setState({snake:snake, direction: direction});
        } else{
            this.setState({direction: direction}); 
        } 
    }
    goRight = () => {
        let direction= this.state.direction;
        let flag =0;
        let snake=[]
        if(direction.x>0){
            return;
        }
        if(direction.x<0){
            snake=this.replaceHeadAndTail();
            flag=1
        }
        //let blockWidth = this.state.blockWidth;
        direction.x = this.state.speed;
        direction.y = 0;
        if(flag==1){
            this.setState({snake:snake, direction: direction});
        } else{
            this.setState({direction: direction}); 
        }  
    }


    handleKeyDown = (event) => {
        //alert("key number "+ event.keyCode + "was clicked");
        let up =38, left=37,right=39,down=40;
        switch(event.keyCode){
            case up:
                this.goUp();
                break;
            case down:
                this.goDown();
                break;
            case left:
                this.goLeft();
                break;
            case right:
                this.goRight();
                break;

        }
    }


    render() {
        return (
            <div>
            {this.state.snake.map((snakePart, index) => {
          return (
            <div
              key={index}
              className='Block'
              style={{
                width: this.state.blockWidth,
                height: this.state.blockHeight,
                left: snakePart.Xpos,
                top: snakePart.Ypos,
                background: '#ff9999',
              }}
            />
          )
        })}
        {this.state.apple.map((appleI, index)=>{
            return(
                <div 
                key={index}
                className="dot"
                style={{width: this.state.blockWidth, 
                        height:this.state.blockWidth,
                        left: appleI.Xpos,
                        top: appleI.Ypos,
                        background: '#66ffff'}}>
                
            </div>
            )
        })}

            </div>

        )
    }
}

export default Snake;
//