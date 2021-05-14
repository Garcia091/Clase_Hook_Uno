import React,{useRef} from 'react'

function RefFocus() {
    //hook
    const refFocus = useRef()

    const handleClik =()=>{
        refFocus.current.select();
        console.log(refFocus)
    }

    return (
        <div>
            <h1>Reft Focus</h1>
            <hr/>
            <input className="container form-control"
                placeholder="nombre"
                ref={refFocus}
            />
            <button className="btn btn-outline-primary"ç
                onClick={handleClik}>
                focus
            </button>
        </div>
    )
}

export default RefFocus
