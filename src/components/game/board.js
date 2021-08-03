import React, {useState, useEffect} from 'react';
import './board.css';

function Square(props){
  const [value,setValue] = useState('');
  return(
    <button type="button" onClick={()=>setValue(ChangeValueSquare(props.id, value))} id={props.id} className="square" >
      {value} 
    </button>
  );
}


//change value of squares
let i = 1;
console.log(i);
i++;
let turn = false;
let count = 0;
//values for player combinations
let setCombinationsX = new Set();
let setCombinationsO = new Set();
//two players: X and O
function ChangeValueSquare(id, value){ 
  var square = document.getElementById(id);
  //console.log(id);
  //if(count === 9)
    //count = 0;
  if(turn){
    //movement player x => true
    square.disabled = true;
    turn = !turn;
    count++;
    setCombinationsX.add(id);
    VerifyEndGame(count, setCombinationsX, 'X');
    return 'X'; 
  }else{ //movement player o => false
    square.disabled = true;
    turn = !turn;
    count++;
    setCombinationsO.add(id);
    console.log(`o ${setCombinationsO}`);
    //console.log('O '+id);
    VerifyEndGame(count, setCombinationsO, 'O');
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

const setWinningCombinations = new Set([

                    [0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [2,4,6],
                    [0,4,8] 
]);

const WinningCombinations = (setPlayerMovements, player) => {
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
   
  // eslint-disable-next-line
  Set.prototype.isSuperset = function(subset) {
      for (var elem of subset) {
          if (!this.has(elem)) {
              return false;
          }
      }
      return true;
  }

  //verify if the player movements are the winning combinations
  for (let combination of setWinningCombinations){
    if(setPlayerMovements.isSuperset(combination)){
      return true;
    }
  } 

  //console.log(setWinningCombinations);
  
  //let resultVerify = setVerify.isSuperset(setWinningCombinations); 
  //console.log(resultVerify);
  //la combinación 1, 4, 7 no ganó

  //console.log('combiWin values: '+combiWin.values());


  //iterando
  //combiWin.forEach((e)=>{
    //console.log(e, typeof(e));
  //});
  
  ////solución con map e includes
  //let condition = combinations.includes(comb.map((e)=> {
    //console.log(e);
    //return e
  //}));
  //console.log(condition);
  //if(condition){
    
    //return true; 
  //} 
  //else
    //return false;


  //solución con set ----------------------------------------------------
  //ordenamiento in place
  //console.log('set comb: '+ combiWin.has('2,4,6'));
  //console.log([...combinationWinner]);
  //comb.sort((a,b)=>{
    //return a - b;
  //});
  //console.log(playerMovements+" "+player);
  //const test = new Set([0,1,2]);
  //console.log('test '+typeof(test));
  //console.log('type combination winner '+typeof(combinationWinner));
  //console.log(combinationWinner);
  //console.log('has '+combinationWinner.isSuperset(test));

  //console.log('comb ordened: '+comb);
  //console.log(combinationWinner.has(playerMovements));
  //return combinationWinner.has(playerMovements);
  //-----------------------------------------------------------------------


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
function VerifyEndGame(moves, setPlayerMovements, player){
  if(moves === 10){
    alert('limite de movimientos');
  }
  else if(WinningCombinations(setPlayerMovements, player)){
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
      board: [],
      value: 0
    };
    this.resetBoard =  this.resetBoard.bind(this);
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

  componentDidUpdate(){
    if(this.state.board.length>9){
      this.resetBoard();

    }
  }

  resetBoard(){ 
    this.setState({
      board: [],
      value: this.state.value+1
    });

    turn = false;
    count = 0;
    setCombinationsO = new Set();
    setCombinationsX = new Set();

    //combX = [];
    //combO = [];
    //this.state.board.forEach((e)=>{
      //console.log(e, typeof(e));
    //});
    //this.state.board.splice(0);
    //this.state.board.forEach((e)=>{
      //console.log(e, typeof(e));
    //});
  }
  
  
  render(){
    this.fillSquare();
    return(
      <div className="board"  key={this.state.value}>
        <h1>using hooks</h1>
        <HowToUseHooks/>
        <h3>Testing</h3> 
        
          <div className="fil">
            {this.state.board.map((element, i)=> {
              const fil = i<3? <div className="butt" key={i}> {element} </div> : null; 
              return fil;
          })}     
          </div>
          <div className="fil">
            {this.state.board.map((element, i)=> {
             const fil = (i>=3 && i<6)? <div className="butt" key={i}> {element} </div> : null; 
              return fil;
          })}     
          </div>
          <div className="fil"> 
            {this.state.board.map((element, i)=> {
            const fil = (i>=6 && i<9)? <div className="butt" key={i}> {element} </div> : null; 
            return fil;
          })}     
          </div> 
        <div> 
          <button type="button" className="resetButton" onClick={this.resetBoard}> ResetGame </button>
        </div>
      </div>
    );
  }

}
