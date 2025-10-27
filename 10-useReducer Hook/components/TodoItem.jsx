import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItem = ({ todoItem, todoDate }) => {

    const { deleteItems } = useContext(TodoItemsContext);
    return <div>
        <div className="container">

            <div className="row int-row">
                <div className="col-6">
                    {todoItem}
                </div>
                <div className="col-4">
                    {todoDate}
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger int-button" onClick={() => {
                        deleteItems(todoItem);
                    }}>Delete</button>
                </div>
            </div>
        </div>
    </div>
}

export default TodoItem;