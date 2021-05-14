import {useState, useEffect,useRef} from 'react'

export const useFetch = (url) => {
    
    const refMount = useRef(true)
    const [state, setstate] = useState(
        {
            data: null,
            loading : true,
            error: null
        }
    )
    useEffect(() => {
       //Etapa de inicia y actualiza
        return () => {
            //Etapa de final del componente
            refMount.current = false
            console.log('Final')
        }
    }, [])


    useEffect(() => {
        fetch(url)
        .then(resp=>resp.json())
        .then(data=>{
            console.log(data)

            if(refMount.current){
                setTimeout(() => {
                    setstate({
                        loading:false,
                        error: null,
                        data
                    })  
                }, 2000);
            }
            else{
                console.log('Componente no disponible')
            }

        })
    }, [url])
    return state;
}
