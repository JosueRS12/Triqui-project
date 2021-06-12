import React from 'react'
import '../index.css' 
import './board.css'

function Square(props){
  return(
    <button type="button"className="square">
    {props.value} 
    </button>
  );
}

//function handleClick(board){
  //console.log("before map"+board);
  //board.map((element)=> { element = "z";
    //return element;
  //});
  //console.log("before map"+board);
//}


export default class Board extends React.Component{
  
  
  constructor(props){
    super(props);
    this.board = [];
  }
  /*
    0   1   2   3 
    4   5   6   7 
    8   9   10  11
    
  */
  fillSquare(i){
    for(let i = 0; i < 12; i++){
      if (i===3||i===7||i===11)
        this.board.push('');
      else
        this.board.push(<Square value={i}/>); 
    }
  }

          //{this.board.map((square) => square)}
  render(){
    return(
      <div className="board">
       {this.fillBoard()}
        <div className="fil">
          {this.board.map((element)=> element? element : <br/>  )}     
        </div>
      </div>
    );
  }
}
