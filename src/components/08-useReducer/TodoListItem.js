

export const TodoListItem =  ( {todos, handleDelete,handleToggle, i} ) =>{

    return (
        <li key={todos.id} className="list-group-item">
          <p
            onClick={() => {
              handleToggle(todos.id);
            }}
            className={` ${todos.done && "complete"} `}
          >
            {i + 1} - {todos.desc}
          </p>
          <button
            onClick={() => {
              handleDelete(todos.id);
            }}
            className="btn btn-danger"
          >
            Borrar
          </button>
        </li>
    )


}