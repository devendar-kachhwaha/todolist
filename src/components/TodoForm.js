import React, { useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input,setInput] = useState('');
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    });

    const handleSubmit = (event) =>{
        event.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
        });
        setInput('');
    };

    const handleOnchange = (event) => {
        setInput(event.target.value);
    };

    return (
        <form onSubmit = {handleSubmit} className = 'todo-form'>
            <input 
                placeholder = 'Add a item'
                value = {input}
                onChange = {handleOnchange}
                name = 'text'
                ref = {inputRef}
                className = 'todo-input'
            />
            <button onClick = {handleSubmit} className = 'todo-button'>ADD</button>

        </form>
    )
}

export default TodoForm
