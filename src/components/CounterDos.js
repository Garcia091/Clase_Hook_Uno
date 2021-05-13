import React from 'react'
import {useCounter} from '../hook/useCounter'

function CounterDos() {

    const {state,incremento, decremento,reset} = useCounter(100)

    return (
        <div>
            <h1>CustomHook del contador</h1>
            <h2> Contador {state} </h2>

            <button onClick={() => incremento() }> +1</button>
            <button onClick={() => reset() }> Reset</button>
            <button onClick={() => decremento() }> -1</button>

        </div>
    )
}

export default CounterDos
