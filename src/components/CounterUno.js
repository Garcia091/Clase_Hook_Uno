import React, { useState } from 'react'

function CounterUno() {
    const [numeroContador, setNumeroContador] = useState({
        numero1:10,
        numero2:20,
        numero3:30,
        numero4:40
    })

    const{numero1,numero2} = numeroContador;
    
    return (
        <div>
            <h1>Contador: {numero1}</h1>
            <h1>Contador: {numero2}</h1>
            <button className="btn btn-primary"
                onClick={()=>setNumeroContador({
                    numero1:numero1+1,
                    numero2:numero2+2
                    })}
            >+1</button>
        </div>
    )
}

export default CounterUno