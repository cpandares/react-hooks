import { TodoListItem } from "./TodoListItem";

export const TodoList = ( {todos, handleDelete, handleToggle} ) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todos, i) => (    

          <TodoListItem key = { todos.id } 
                        i = {i} 
                         todos = { todos }
                         handleToggle = { handleToggle } 
                         handleDelete = { handleDelete } />
        
      ))}
    </ul>
  );
};
