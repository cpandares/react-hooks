import { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'
import './estilos.css'


export const MemoHook = ()=>{

    const {state, increment} = useCounter(1000);

     const [ show, setShow ] = useState(true);

     

      const memoProcesoPesado = useMemo(()=>procesoPesado(state), [state]);

    return ( 

        

        <div>
            <p> { memoProcesoPesado } </p> 
                <h1> Counter: <small >  { state } </small> </h1>
                <hr />
            <button onClick = { increment }
                    className="btn btn-primary">
                +1
            </button>

            <button className="btn btn-outline-danger ml-3"
                    onClick = { ()=>{
                        setShow(!show);
                    } }
                    >
                Show/Hide { JSON.stringify(show) }
            </button>
        </div>

    )

}