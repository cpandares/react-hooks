import { useRef } from 'react';
import './estilos.css';

export const FocusScreen = ()=>{

    const inputRef = useRef();

    const handleClick = ()=>{
       //inputRef.current.focus();
      inputRef.current.select();
    }

    return (
        <div>
            <h1> Use Ref</h1>
            <hr />

            <input  
                    ref = { inputRef } 
                    className="form-control"
                    placeholder="Nombre" />

            <button
                    onClick = { handleClick }
                    className="btn btn-outline-primary mt-5"
                    >focus</button>
        </div>
    )

}