import { useState } from 'react';
import { useCounter } from '../../hooks/useCounter'
import './estilos.css'
import { Small } from './Small';

export const Memorize = ()=>{

    const {state, increment} = useCounter(10);

     const [ show, setShow ] = useState(true);

    return ( 

        <div>
                <h1> Counter: <Small value={ state } />  </h1>
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