export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    payload: todo,
  });
  
  export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    payload: id,
  });
  
  export const toggleDone = (id) => ({
    type: 'TOGGLE_DONE',
    payload: id,
  });
  