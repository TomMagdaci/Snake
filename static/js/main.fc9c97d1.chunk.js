(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{14:function(t,e,a){"use strict";a.r(e);var o=a(2),s=a(3),r=a(5),n=a(4),i=a(1),h=a.n(i),d=a(6),c=a.n(d),p=(a(8),a(0)),l=function(t){Object(r.a)(a,t);var e=Object(n.a)(a);function a(t){var s;Object(o.a)(this,a),(s=e.call(this,t)).resetAppleArr=function(t,e,a,o,s){for(var r=[],n=0;n<t;n++){for(var i=Math.floor(Math.random()*((o-s)/s+1))*s,h=Math.floor(Math.random()*((a-s)/s+1))*s;h==e.Ypos;)h=Math.floor(Math.random()*((a-s)/s+1))*s;r.push({Xpos:i,Ypos:h})}return r},s.resetGame=function(){alert("GameOver... your score was: "+s.state.snake.length+"\nTry again!");for(var t=s.state.snake,e=t.length;e>0;)t.pop(),e--;var a={Xpos:19*s.state.boardWidth/20,Ypos:s.state.boardWidth/2};t.push(a);var o={x:0,y:-s.state.borderWidth};s.setState({snake:t,direction:o})},s.moveInSpecDirection=function(){var t=s.state.snake,e=t[0].Xpos,a=t[0].Ypos;t[0].Xpos+=s.state.direction.x,t[0].Ypos+=s.state.direction.y;var o=0;t[0].Xpos>s.state.boardWidth-s.state.borderWidth&&s.state.direction.x>=0&&0==o&&(t[0].Xpos=0,o=1),t[0].Ypos>s.state.boardHeight-s.state.borderWidth&&s.state.direction.y>=0&&0==o&&(t[0].Ypos=0,o=1),t[0].Xpos<0&&s.state.direction.x<0&&0==o&&(t[0].Xpos=s.state.boardWidth-s.state.borderWidth,o=1),t[0].Ypos<0&&s.state.direction.y<0&&0==o&&(t[0].Ypos=s.state.boardHeight-s.state.borderWidth,o=1);for(var r=t.length-1;r>=1;r--)1!=r?(t[r].Xpos=t[r-1].Xpos,t[r].Ypos=t[r-1].Ypos):(t[r].Xpos=e,t[r].Ypos=a);s.setState({snake:t})},s.retNewApp=function(){for(var t=s.state.boardWidth,e=s.state.boardHeight,a=s.state.blockWidth,o=Math.floor(Math.random()*((t-a)/a+1))*a,r=Math.floor(Math.random()*((e-a)/a+1))*a;r==s.state.snake[0].Ypos;)r=Math.floor(Math.random()*((e-a)/a+1))*a;return{Xpos:o,Ypos:r}},s.appleEatenFollowingCommands=function(t){var e=s.state.snake,a=s.state.direction,o=s.state.blockWidth,r=s.state.apple;0!=a.x?a.x<0?e.push({Xpos:e[e.length-1].Xpos+o,Ypos:e[e.length-1].Ypos}):e.push({Xpos:e[e.length-1].Xpos-o,Ypos:e[e.length-1].Ypos}):a.y<0?e.push({Xpos:e[e.length-1].Xpos,Ypos:e[e.length-1].Ypos+o}):e.push({Xpos:e[e.length-1].Xpos,Ypos:e[e.length-1].Ypos-o});var n=s.retNewApp();r[t]=n,s.setState({snake:e,apple:r})},s.checkIfAppleEaten=function(){for(var t=s.state.snake,e=s.state.apple,a=s.state.blockWidth,o=0;o<e.length;o++)Math.abs(t[0].Xpos-e[o].Xpos)<3*a/4&&Math.abs(t[0].Ypos-e[o].Ypos)<3*a/4&&s.appleEatenFollowingCommands(o)},s.tryEatSnake=function(){for(var t=s.state.snake,e=t.length,a=s.state.blockWidth,o=1;o<e;o++)if(Math.abs(t[0].Xpos-t[o].Xpos)<a/3&&Math.abs(t[0].Ypos-t[o].Ypos)<a/3)return void s.resetGame()},s.gameLoop=function(){setInterval((function(){s.moveInSpecDirection(),s.checkIfAppleEaten(),s.tryEatSnake()}),200)},s.replaceHeadAndTail=function(){for(var t=s.state.snake,e=Math.floor(t.length/2),a=t.length,o=0;o<e;o++){var r=t[o];t[o]=t[a-1-o],t[a-1-o]=r}return t},s.goUp=function(){var t=s.state.direction,e=0,a=[];if(!(t.y<0)){t.y>0&&(a=s.replaceHeadAndTail(),e=1);var o=s.state.blockWidth;t.x=0,t.y=-o,1==e?s.setState({snake:a,direction:t}):s.setState({direction:t})}},s.goDown=function(){var t=s.state.direction,e=0,a=[];if(!(t.y>0)){t.y<0&&(a=s.replaceHeadAndTail(),e=1);var o=s.state.blockWidth;t.x=0,t.y=o,1==e?s.setState({snake:a,direction:t}):s.setState({direction:t})}},s.goLeft=function(){var t=s.state.direction,e=0,a=[];if(!(t.x<0)){t.x>0&&(a=s.replaceHeadAndTail(),e=1);var o=s.state.blockWidth;t.x=-o,t.y=0,1==e?s.setState({snake:a,direction:t}):s.setState({direction:t})}},s.goRight=function(){var t=s.state.direction,e=0,a=[];if(!(t.x>0)){t.x<0&&(a=s.replaceHeadAndTail(),e=1);var o=s.state.blockWidth;t.x=o,t.y=0,1==e?s.setState({snake:a,direction:t}):s.setState({direction:t})}},s.handleKeyDown=function(t){switch(t.keyCode){case 38:s.goUp();break;case 40:s.goDown();break;case 37:s.goLeft();break;case 39:s.goRight()}};var r=t.width;console.log(r);var n=t.height,i=t.borderWidth,h=i,d=i,c={Xpos:19*r/20,Ypos:n/2},p=[];p.push(c),p.push({Xpos:c.Xpos,Ypos:c.Ypos+h}),p.push({Xpos:c.Xpos+h,Ypos:c.Ypos+h});var l;return l=s.resetAppleArr(4,p[0],n,r,i),s.state={boardWidth:r,boardHeight:n,snakehead:c,snake:p,blockWidth:h,blockHeight:d,borderWidth:i,direction:{x:0,y:-i},apple:l},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),this.gameLoop()}},{key:"render",value:function(){var t=this;return Object(p.jsxs)("div",{children:[this.state.snake.map((function(e,a){return Object(p.jsx)("div",{className:"Block",style:{width:t.state.blockWidth,height:t.state.blockHeight,left:e.Xpos,top:e.Ypos,background:"orange"}},a)})),this.state.apple.map((function(e,a){return Object(p.jsx)("div",{className:"dot",style:{width:t.state.blockWidth,height:t.state.blockWidth,left:e.Xpos,top:e.Ypos,background:"Turquoise"}},a)}))]})}}]),a}(h.a.Component),u=function(t){Object(r.a)(a,t);var e=Object(n.a)(a);function a(t){var s;return Object(o.a)(this,a),(s=e.call(this,t)).state={percentageWidth:t.percentageWidth,width:t.width,height:t.height,borderWidth:t.width/50,flag:0},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return Object(p.jsx)("div",{id:"GameBoard",style:{width:this.state.width,height:this.state.height,borderWidth:this.state.borderWidth,borderColor:"gray"},children:Object(p.jsx)(l,{width:this.state.width,height:this.state.height,borderWidth:this.state.borderWidth})})}}],[{key:"getDerivedStateFromProps",value:function(t,e){return{percentageWidth:t.percentageWidth,width:t.width,height:t.height}}}]),a}(h.a.Component),b=function(t){Object(r.a)(a,t);var e=Object(n.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).state={rows:10,cols:10,grid:[]},t}return Object(s.a)(a,[{key:"getRandomGrid",value:function(){return{row:Math.floor(Math.random()*this.state.rows),col:Math.floor(Math.random()*this.state.cols)}}},{key:"render",value:function(){var t=.6*document.getElementById("root").parentElement.offsetWidth;(t-=t%30)<30&&(t=30);var e=t/3*2;return Object(p.jsx)("div",{children:Object(p.jsx)(u,{percentageWidth:"65",width:t,height:e})})}}]),a}(h.a.Component);c.a.render(Object(p.jsx)(b,{}),document.getElementById("root"))},8:function(t,e,a){}},[[14,1,2]]]);
//# sourceMappingURL=main.fc9c97d1.chunk.js.map