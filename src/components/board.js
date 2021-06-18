import React, {useState, useEffect} from 'react'
import '../index.css' 
import './board.css'

function Square(props){
  const [value,setValue] = useState('');
  return(
    <button type="button" onClick={()=>setValue(changeValueSquare(props.id, value))} id={props.id} className="square" >
      {value} 
    </button>
  );
}


//change value of squares
let turn = false;
let count = 0;
let combX = [];
let combY = [];
//two players: X and O
function changeValueSquare(id, value){ 
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
    verifyEndGame(count, combX, 'X');
    return 'X'; 
  }else{ //movement player o => false
    square.disabled = true;
    turn = !turn;
    count++;
    combY.push(id);
    console.log('O '+id);
    verifyEndGame(count, combY, 'Y');
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
                      '0,1,3',
                      '3,4,5',
                      '6,7,8',
                      '0,4,8',
                      '2,4,6'];

const combiWin = new Set(combinations);

const winningCombinations = (comb) => {
  // pasar un array con los indices
  // position
  ///////////////////////
  // 0 1 2             // 0 1 3
  // 3 4 5 consecutivos// 3 4 5
  // 6 7 8 horizontales// 6 7 8
  ///////////////////////
  // 0     //     2  ////
  //   4   //   4    ///
  //     8 //6       ////  
   
  //
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
const verifyEndGame = (option, comb, player) => {
  if(option === 9)
    alert('limite de movimientos');
  else if(winningCombinations(comb)){
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
    this.board = [];
  }
  /*
    0   1   2   
    3   4   5   
    6   7   8      
    
  */
  fillSquare(i){
    for(let i = 0; i < 9; i++){
      this.board.push(<Square id={i}/>);
    }
  }
  
  
  render(){
    return(
      <div className="board">
      <h1>using hooks</h1>
      <HowToUseHooks/>
      <h3>Testing</h3> 
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
