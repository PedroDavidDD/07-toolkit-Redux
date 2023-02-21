import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {

  const { page, pokemons, isLoading } = useSelector( (state, action) => state.pokemons );
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch( getPokemons() );

  }, [])
  console.table(pokemons)
  
  return (
    <>
        <h1>PokemonApp</h1>
        <hr />
        <span>Loading: { isLoading ? 'True': 'False'}</span>

        <ul>
          { 
            pokemons.map( ({name}) => (
              <li key={ name }>{ name }</li>
            ))
          }
        </ul>

        <button
          disabled={ isLoading }
          onClick={ () => dispatch( getPokemons(page) ) }
          >
          Next
        </button>
    </>
  )
}
