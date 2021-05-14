import React, {useState} from 'react'
import useFetch from '../hook/useFetch'
import Api from '../components/Api'

function RealUseRef() {
 
    const [show, setShow] = useState(false)

    return (
        <div className="container text-center">
            <h1> Caso Real</h1>
            {
               !show && <Api/>
            }

            <button className="btn btn-outline-danger"
             onClick={()=>{setShow(!show)}}
            > Cambia a {JSON.stringify(show)}

            </button>
            
        </div>
    )
}

export default RealUseRef
