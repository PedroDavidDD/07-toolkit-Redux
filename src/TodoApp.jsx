import { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from './store/apis/todosApi'

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1);
    // const { data: todos = [], isLoading } = useGetTodosQuery();
    const { data: todo, isLoading } = useGetTodoQuery( todoId );
    // console.log(todo)


  return (
    <>
        <h1>todos- RTK query</h1>
        <hr />
        <h4>isloading: { isLoading ? 'true': 'false'}</h4>

        <pre>{ JSON.stringify(todo) }</pre>
        
        <button onClick={()=> setTodoId( todoId - 1)}>
            prev todo
        </button>
        <button onClick={()=> setTodoId( todoId + 1)}>
            next todo
        </button>
        {/* <ul>
            { todos.map((todo) => (
                <li key={todo.id}>
                    <strong>{ todo.completed ? 'done':'pending'}</strong>
                    {todo.title}
                </li>
            ))}
        </ul> */}

    </>
  )
}
