import { useState } from "react";
import { FormTodo } from "./FormTodo";

export const ListTodo = () => {
    const [todos, setTodos] = useState([]);
    
    const addTodo = (todo) => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);

        console.log(todo,...todos);
    };

    

    return (
        <div>
            <h1>Liste des tâches</h1>
            <FormTodo onSubmit={addTodo} />
        </div>

    );
    
}

