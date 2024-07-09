export default function ToDoItem({ tarefas, deleteTask }) {
    return (
        <div className="tasks-container">
            {tarefas.map((item, key) => {
                return(
                    <div className="cards" key={key}>
                        <div className="card-header">
                            <h3 className="card-title">{item.title}</h3>
                            <span className="card-btn" onClick={() => deleteTask(item.id)}><i className="fas fa-trash"></i></span>
                        </div>
                        <p className="card-text">{item.description}</p>
                    </div>
                )
            })}
        </div>
    )
}