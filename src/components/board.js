import React, {useState, useEffect} from 'react'
import '../index.css' 
import './board.css'

function Square(props){
  const [value,setValue] = useState('');
  return(
    <button type="button" onClick={()=>setValue(ChangeValueSquare(props.id, value))} id={props.id} className="square" >
      {value} 
    </button>
  );
}


//change value of squares
let turn = false;
let count = 0;
let combX = [];
let combO = [];
//two players: X and O
function ChangeValueSquare(id, value){ 
  var square = document.getElementById(id);
  console.log(id);
  //if(count === 9)
    //count = 0;
  if(turn){
    //movement player x => true
    square.disabled = true;
    turn = !turn;
    count++;
    combX.push(id);
    console.log('x '+id);
    VerifyEndGame(count, combX, 'X');
    return 'X'; 
  }else{ //movement player o => false
    square.disabled = true;
    turn = !turn;
    count++;
    combO.push(id);
    console.log('O '+id);
    VerifyEndGame(count,combO, 'O');
    return 'O';
  }
}

//verify winner
//primero verificar que todos los botones esten deshabilitados, de ese modo se
//sabe que el juego terminó: Cuando count es = 9, todos se encuentrar
//deshabilitados.
//segundo crear las combinaciones posibles para ganar.
//comprobrar si el player X ó el player O es el ganador.

//winning combinations

const combinations = ['0,1,2',
                      '3,4,5',
                      '6,7,8',
                      '0,3,6',
                      '1,4,7',
                      '2,5,8',
                      '2,4,6',
                      '0,4,8'];

const combiWin = new Set(combinations);

const WinningCombinations = (comb) => {
  // pasar un array con los indices
  // position
  ///////////////////////
  // 0 1 2 WIN             // 0 1 2 WIN
  // 3 4 5 WIN consecutivos// 3 4 5 WIN
  // 6 7 8 WIN horizontales// 6 7 8
  ///////////////////////
  // 0     //     2  ////
  //   4   //   4    ///
  //     8 //6       ////  
   
  //

  //la combinación 1, 4, 7 no ganó

  console.log('combiWin values: '+combiWin.values());


  //iterando
  combiWin.forEach((e)=>{
    console.log(e, typeof(e));
  });



  //ordenamiento in place
  //console.log('set comb: '+ combiWin.has('2,4,6'));
  comb.sort((a,b)=>{
    return a - b;
  });

  console.log('comb ordened: '+comb);
  return combiWin.has(comb.toString());
  //combinations.map((currentValue, index)=>{
    ////console.log(comb)
    ////comb => array con las combinaciones
    //if(currentValue === comb)
      //return currentValue;
    //else
      //return null;
  //});
}

//verify end game
function VerifyEndGame(option, comb, player){
  if(option === 9){
    alert('limite de movimientos');
  }
  else if(WinningCombinations(comb)){
    alert(`ganó el jugador ${player}`);
  }
}

//hooks structure
function HowToUseHooks(props){
  //useState
  //se inicializa la variable de estado que se desea usar
  //se define el nombre (arbitrario) de la variable y su setter
  const [count, setCount] = useState(0);


  // useEffect
  useEffect(() => {
    document.title = `you clicked ${count} times`;
  }); 
  return(
    <div>
      <p> valor acutal del button {count} </p>
      <button type ="button" onClick={() => setCount(count+2)}>
      click on me
      </button>
    </div>
  );
}


export default class Board extends React.Component{
  
  
  constructor(props){
    super(props);
    this.state = {
      board: []
    };
  }
  /*
    0   1   2   
    3   4   5   
    6   7   8      
    
  */
  
  fillSquare(i){
    for(let i = 0; i < 9; i++){
      this.state.board.push(<Square id={i}/>);
    }
  }

  //resetBoard(){
    //this.board.splice(0);
  //}
  
  
  render(){
    return(
      <div className="board">
      <h1>using hooks</h1>
      <HowToUseHooks/>
      <h3>Testing</h3> 
        {this.fillSquare()}
        <div className="fil">
          {this.state.board.map((element, i)=> {
            const fil = i<3? <div className="butt"> {element} </div> : null; 
            return fil;
        })}     
        </div>
        <div className="fil">
          {this.state.board.map((element, i)=> {
           const fil = (i>=3 && i<6)? <div className="butt"> {element} </div> : null; 
            return fil;
        })}     
        </div>
        <div className="fil"> 
          {this.state.board.map((element, i)=> {
          const fil = (i>=6 && i<9)? <div className="butt"> {element} </div> : null; 
          return fil;
        })}     
        </div> 
        <button type="button" className="resetButton" onClick={this.resetBoard}> ResetGame </button>
      </div>
    );
  }

}
