import React, { useState } from 'react'

function TextExample() {

    const [textState, setTextState] = useState(false)

    return (
        <div>
            <button className="btn btn-danger"
                onClick={() => setTextState(true)}
            >
                Enviar
            </button>

            {
                textState && <h1>El estado cambio</h1>
            }

        </div>
    )
}

export default TextExample
