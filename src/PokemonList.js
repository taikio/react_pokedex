import React from 'react'

import './PokemonList.css';

export default function PokemonList({ pokemon }) {
    return (
        <>
            {pokemon.map(p => (
                <div className="pokemon-item" key={p}>{p}</div>
            ))}
        </>
    )
}
