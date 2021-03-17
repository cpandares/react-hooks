import { useEffect, useReducer } from 'react';
import { useForm } from '../../hooks/useForm';
import './estilos.css';
import { TodoList } from './TodoList';
import { TodoReducer } from './TodoReducer';



const init = ()=>{

    return JSON.parse(localStorage.getItem('todos')) || []; // sino exiten todos devulve un array vacío

    /*return  [{
        id : new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }]*/

}

export const TodoApp = ()=>{

    const [ todos, dispatch ] = useReducer(TodoReducer, [], init);

     const [ { description }, handleInputChange, reset ] = useForm({
         description: ''
     });

  //  console.log(description);

  //Grabar en el local storage cuando cambia los ToDos

     useEffect( ()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
     },[todos]);


    const handleDelete = ( todo )=>{        
        //console.log(todo)

       const action = {
            type: 'delete',
            payload: todo
        }

        dispatch(action);

    } 

    const handleToggle = (todoId)=>{
        const action = {
            type: 'toggle',
            payload: todoId
        }

        dispatch(action);


    } 

    const handleSubmit = (e)=>{

        e.preventDefault();

        if(description.trim().length <= 1){
            return;
        }

        const newTodo = {
            id : new Date().getTime(),
            desc: description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);

        reset();

    }

    return (

       <div>
           <h1>Todo App ( { todos.length })</h1>
           <hr />

           <div className="row">

               <div className="col-7"> 

                    <TodoList todos = { todos }
                              handleToggle = {handleToggle}
                              handleDelete = { handleDelete }
                               />
               </div>   

               <div className="col-5">

                   <h4>Agregar Todo</h4>
                   <hr />

                   <form onSubmit = { handleSubmit }>
                        <input 
                            type="text"
                            name="description"
                            placeholder="aprender..."
                            className="form-control"
                            autoComplete="off"
                            value = {description}
                            onChange = {handleInputChange}
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-info btn-block mt-2" 
                            >
                           Guardar
                        </button>

                   </form>


               </div>


           </div>

       </div>     

    )


}