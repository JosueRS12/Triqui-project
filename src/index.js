//librerias de react
import React from 'react';
import ReactDOM from 'react-dom';
//vincular el css
import './index.css'
import Board from './components/game/board'


const Layout = (props) =>{
  return (
    <main>
      <header>
        <div className="menu">
          <div className='content-menu'>
            <p> TRIKI APP </p>
          </div>
          <div className='content-menu'>
            <button type="button">Visitar Repositorio </button>
          </div>

        </div>
      </header>
      
      <section id="game">
        <Board/>
      </section>
      <p>hola mundo</p>
    </main>
  );
}

export default Layout;

ReactDOM.render(
  <Layout/>,
  document.getElementById("root")
);
