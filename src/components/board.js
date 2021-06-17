import React from 'react'
import '../index.css' 
import './board.css'

function Square(props){
  return(
    <button type="button" className="square">
      {props.value} 
    </button>
  );
}

//hooks structure
function hooks(){

}


export default class Board extends React.Component{
  
  
  constructor(props){
    super(props);
    this.board = [];
  }
  /*
    0   1   2   
    3   4   5   
    6   7   8      
    
  */
  fillSquare(i){
    for(let i = 0; i < 9; i++){
      this.board.push(<Square value ='o'/>);
    }
  }

  render(){
    return(
      <div className="board">
       {this.fillSquare()}
        <div className="fil">
          {this.board.map((element, i)=> {
            const fil = i<3? <div className="butt"> {element} </div> : null; 
            return fil;
        })}     
        </div>
        <div className="fil">
          {this.board.map((element, i)=> {
           const fil = (i>=3 && i<6)? <div className="butt"> {element} </div> : null; 
            return fil;
        })}     
        </div>
        <div className="fil"> 
          {this.board.map((element, i)=> {
          const fil = (i>=6 && i<9)? <div className="butt"> {element} </div> : null; 
          return fil;
        })}     
        </div>
  
      </div>
    );
  }

}
