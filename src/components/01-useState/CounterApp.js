
import { useState } from 'react';
import './counter.css';

export const CounterApp = () =>{

   // const  [state,setState] = useState(10);

   const  [state,setState] = useState(
                                {
                                    state1:10,
                                    state2:20    
                                });

        //console.log(state);

        const {state1,state2} = state;

    return(        
       
        
        <>
         <h1> Couner1: { state1 } </h1>
         <h1> Couner2: { state2 } </h1>
             

            <button className="btn btn-primary"
                    onClick = { ()=>{
                           //setState(state + 1) 
                          setState({
                              ...state,
                              state1: state1+1
                          });
                     }
                    }
                    >
                +1
            </button>
        </>


    )
    

}