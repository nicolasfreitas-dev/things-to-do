import { useState } from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList() {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [tarefas, setTarefas] = useState([]);

    const handleTitleChange = (event) => {
        setTitulo(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        setDescricao(event.target.value)
    }

    const createNewTask = () => {
        event.preventDefault();

        if (!titulo || !descricao) {
            alert("Preencha os campos para criar uma nova tarefa.")
        }

        const tarefa = {
            id: Math.floor(Math.random() * 1000),
            title: titulo,
            description: descricao
        }

        setTarefas(oldList => [...oldList, tarefa]);
        
        setTitulo("");
        setDescricao("");
    }

    const handleDeleteTask = (id) => {
        const deleteTask = tarefas.filter((tarefa) => tarefa.id !== id);

        setTarefas(deleteTask);
    }

    return (
        <main className="main-container">
            <form className="form-container">
                <input
                    className="title-input"
                    type="text"
                    name="titulo"
                    id="titulo"
                    placeholder="Título da tarefa"
                    value={titulo}
                    onChange={(event) => handleTitleChange(event)}
                />
                <textarea
                    className="desc-input"
                    name="descricao"
                    id="descricao"
                    placeholder="Descrição da tarefa"
                    value={descricao}
                    onChange={(event) => handleDescriptionChange(event)}
                ></textarea>
                <button type="submit" className="create-task-btn" onClick={createNewTask}>Criar nova tarefa</button>
            </form>
            <ToDoItem tarefas={tarefas} deleteTask={handleDeleteTask} />
        </main>
    );
}
