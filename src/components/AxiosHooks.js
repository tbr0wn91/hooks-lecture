import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useInput from './useInput';
import useFetch from './useFetch'

function AxiosHooks(props) {

    const { data: pokemon, fetchData } = useFetch('https://pokeapi.co/api/v2/pokemon')
    const pokemonId = useInput(1)

    
    
   

    
    if (!pokemon) {
        return <div>
            Loading...
        </div>
    }
    return <div>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites.front_default} alt='pokemans'/>
        <input type='number' {...pokemonId}/>
        <button onClick={() => fetchData(pokemonId.value)}>Get New Pokemans</button>
    </div>
}

export default AxiosHooks;


