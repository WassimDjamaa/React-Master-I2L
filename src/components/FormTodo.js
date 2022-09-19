import { useState } from "react";

export const FormTodo = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo("");
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Ajouter</button>
        <ul>
            {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
            ))}
        </ul>
        </form>
    );
    }