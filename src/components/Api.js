import React from 'react'
import {useFetch} from '../hook/useFetch'

function Api() {
    const {loading, data}= useFetch('https://rickandmortyapi.com/api/character/2')
   
    const {id,name, spacies, image} = !!data && data 
    return (
        <div className="container text-center">
            <h1>The Rick and Morty API</h1>
            <div className="alert alert-info text-center"> loading...</div>
            <h2> id: {id}</h2>
            <h2> Nombre: {name}</h2>
            <h2> Especie: {spacies}</h2>
            <img src={image} />
        </div>
    )
}

export default Api
