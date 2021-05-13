import React, {useState, useEffect} from 'react'

function FormExample() {

    const [state, setState] = useState({
        name:'',
        lastName:''
    })

    const {name,lastName} = state

    useEffect(()=>{
        console.log('Hook en ejecución')
    },[])

    const handleInputChange=({target})=>{
        setState({
            ...state,
            [target.name]: target.value
        })
    }

    return (
        <div className="form-group container">
            <h1>UseEffect</h1>
            <input  className="form-control mb-3"
             value={name}
             name="name"
             onChange={handleInputChange}
            
            />
            <input  className="form-control mb-3"
             value={lastName}
             name="lastName"
             onChange={handleInputChange}
            
            />
        </div>
    )
}

export default FormExample

