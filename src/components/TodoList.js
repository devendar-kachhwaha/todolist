import React ,{useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos,setTodos] = useState([]);

    const addTodo = (todo)=>{
        const newTodos = [...todos,todo];
        return setTodos(newTodos);
    };

    const removeTodo = (id) => {
        const newArr = [...todos].filter(todo => todo.id !==id)
        setTodos(newArr);
    }

    return (
        <>
            <h1>FU*KING TASKS OF THE DAY</h1>
            <TodoForm onSubmit = {addTodo} />
            <Todo 
                todos = {todos}
                removeTodo = {removeTodo}
            />
        </>
    )
}

export default TodoList
