import React from "react";


class Pokemons extends React.Component {
    render() {
        const {pokemon:{name, type, image, averageWeight:{value,  measurementUnit}}} = this.props;
        return(
            <div className="pokemons">
                <h2>{name} </h2>
                <p>{type}</p>
                <p>{`Peso ${value} ${measurementUnit}`}</p>
                <img src={image} alt={name} />
            </div>
        );

    }
}
export default Pokemons;