import React from "react";
import Pokedex from "./pokedex";
import pokemons from "./data";
import './colorPokemons.css';


function App() {
  return (
    <div className="app">
    <h1 className='title' > Pokedex</h1>
     <section className="list-pokemons"><Pokedex pokemon = {pokemons}/></section> 
    </div>
  );
}

export default App;
