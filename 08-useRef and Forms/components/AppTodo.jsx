//Using useRef hook to enhance the optimization.
//Also Using forms.

import { useRef } from "react";

const AppTodo = ({ onNewItem }) => {
    const todoNameElement = useRef();
    const dueDateElement = useRef();

    const handleAddButtonClicked = (event) => {
        event.preventDefault();
        const todoName = todoNameElement.current.value;
        const dueDate = dueDateElement.current.value;
        onNewItem(todoName, dueDate);
        todoNameElement.current.value = "";
        dueDateElement.current.value = "";
    }

    return (
        <div>
            <div className="container text-center">

                <form className="row int-row" onSubmit={handleAddButtonClicked}>

                    <div className="col-6">
                        <input type="text"
                            placeholder="Enter Todo here"
                            ref={todoNameElement}
                        />
                    </div>
                    <div className="col-4">
                        <input type="date"
                            ref={dueDateElement}
                        />
                    </div>
                    <div className="col-2">
                        <button
                            className="btn btn-success int-button"
                        >Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AppTodo;