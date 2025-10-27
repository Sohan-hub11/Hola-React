import { useState } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
const AppTodo = () => {
    const { addNewItems } = useContext(TodoItemsContext);
    const [todoName, setTodoname] = useState([]);
    const [dueDate, setDueDate] = useState([]);

    const handleNameChange = (event) => {
        setTodoname(event.target.value);
    }
    const handleDateChange = (event) => {
        setDueDate(event.target.value);
    }
    const handleAddButtonClicked = () => {
        addNewItems(todoName, dueDate);
        setTodoname("");
        setDueDate("");
    }

    return <div>
        <div className="container text-center">
            <div className="row int-row">
                <div className="col-6">
                    <input type="text"
                        placeholder="Enter Todo here"
                        onChange={handleNameChange}
                        value={todoName}
                    />
                </div>
                <div className="col-4">
                    <input type="date"
                        onChange={handleDateChange} value={dueDate} />
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-success int-button"
                        onClick={handleAddButtonClicked}>Add</button>
                </div>
            </div>
        </div>
    </div>
}

export default AppTodo;