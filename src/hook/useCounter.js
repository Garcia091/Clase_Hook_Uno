import {useState} from 'react'

export const useCounter = (inicial=10) => {

    const [state, setstate] = useState(inicial) //10

    const incremento =()=>{
        setstate(state + 1 )
    }

    const decremento =()=>{
        setstate(state - 1 )
    }

    const reset =()=>{
        setstate(inicial)
    }

    return{
        state,
        incremento,
        decremento,
        reset
    }
   
}
