import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

import './estilos.css';


export const CallBackHook = ()=>{

    const [state, setState] = useState(10);

  /*  const increment = ()=>{
        setState(state+1)
    }*/

     const increment = useCallback( (num) =>{
        setState( s => s + num);
    },[ setState ])

    return (
       
        <div> 
            <h1>Callback hook: {state} </h1> 
            <hr />     


            <ShowIncrement  increment = { increment }/>    
        </div>
       
        
    )

}