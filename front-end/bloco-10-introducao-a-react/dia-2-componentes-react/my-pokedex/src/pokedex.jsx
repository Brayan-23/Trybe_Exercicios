import React from "react";
import Pokemons from "./pokemons";


class Pokedex extends React.Component {
    render() {
        const pokemon = this.props.pokemon;
        return (pokemon.map((elem) => <Pokemons key={elem.id} pokemon={elem}/>))
    }
}

export default Pokedex;