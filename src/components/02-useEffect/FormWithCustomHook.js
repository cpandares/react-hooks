
import { useForm } from '../../hooks/useForm';
import './effect.css';


export const FormWithCustomHook = ()=>{

    const [formValues,handleInputChange] = useForm({
        name:'',
        email:'',
        password:''
    });

    const {name,email,password} = formValues;

    const handleSubmit = (e)=>{
        e.preventDefault();

        console.log(formValues);
    }

  return (
      <form onSubmit={ handleSubmit }>

            <h1>FormWithCustomHook</h1>

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

            </div>

             <div className="form-group">

                <input type="password"
                        className="form-control"
                        name="password"
                        placeholder="****"
                        value={password}
                        onChange={ handleInputChange } >                
                </input>


            </div>

           <button className="btn btn-primary">Guardar</button>

      </form>

        
  )

}