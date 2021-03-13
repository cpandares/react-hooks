import { useEffect, useState } from 'react';
import './effect.css';
import { Message } from './Message';

export const SimpleForm = ()=>{

    const [formState,setFormState] = useState({
        name:'',
        email:''
    });

    const {name,email} = formState;

    useEffect( ()=>{

       // console.log("hey");

    },[] );

    useEffect( ()=>{

        //console.log("Form State cambio");

    },[formState] );

    useEffect( ()=>{

        //console.log("Email State cambio");

    },[email] );

    const handleInputChange = ({target})=>{

        setFormState({
            ...formState,
            [target.name] : target.value
        });


    }

  return (
      <>

            <h1>useEffect</h1>

            <hr />

            <div className="form-group">

                <input type="text"
                        className="form-control"
                        name="name"
                        placeholder="tu nombre"
                        autoComplete="off"
                        value={name}
                        onChange={ handleInputChange } >                
                </input>

            </div>

            <div className="form-group">

                <input type="email"
                        className="form-control"
                        name="email"
                        placeholder="tu email"
                        autoComplete="off"
                        value={email}
                        onChange={ handleInputChange } >                
                </input>

                { (name === 'cesar') &&  <Message /> }

            </div>

           

      </>

        
  )

}