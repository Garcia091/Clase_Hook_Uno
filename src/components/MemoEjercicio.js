import React from 'react'
import {useCounter} from '../hook/useCounter'

function MemoEjercicio() {

    const {state,incremento} =useCounter(1)
    
    return (
        <div>
            <h1>Clase memo {state}</h1>

            <button className=""
                onClick={incremento}>
                    +1
            </button>
        </div>
    )
}

export default MemoEjercicio
