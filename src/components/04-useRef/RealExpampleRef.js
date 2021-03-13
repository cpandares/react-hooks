
import { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import './estilos.css';
 export const RealExampleRef = ()=>{

     const [show, setshow] = useState(false);

    return (
        <div>

            <h1>RealExampleRef</h1>
            <hr />
            { show && <MultipleCustomHooks />}

            <button className="btn btn-primary m-5" onClick={()=>{
                setshow(!show)
            }}> Show/hide</button>
        </div>
    )


}