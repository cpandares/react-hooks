import React from "react";

export const ShowIncrement = React.memo(({ increment })=>{

    console.log("se volvio a cargar");

    return (

        <button
                className="btn btn-primary" 
                onClick = { ()=>{
                    increment( 8 );
                } }
        >Incrementar</button>
    )

})