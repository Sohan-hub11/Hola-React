//Using useReducer Hook.

import AppName from "./components/AppName"
import AppTodo from "./components/AppTodo"
import "./App.css"
import TodoItems from "./components/TodoItems"
import { useState } from "react"
import WelcomeMessage from "./components/WelcomeMessage"
import { TodoItemsContext } from "./store/todo-items-store"

const App = () => {

  const [todoItems, setTodoItems] = useState([]);

  const addNewItems = (itemName, itemDueDate) => {
    console.log(`New items Added: ${itemName} Date: ${itemDueDate}`);
    const newTodoItems = [...todoItems, {
      name: itemName,
      dueDate: itemDueDate
    }]
    setTodoItems(newTodoItems);
  };

  const deleteItems = (todoItemsName) => {
    const newTodoItems = todoItems.filter((item) => item.name != todoItemsName)
    setTodoItems(newTodoItems);
    console.log(`${todoItemsName} : item deleted`);
  }

  // const defaultTodoItems = [{
  //   name: "Buy Milk", dueDate: "Today"
  // }];
  return (
    <TodoItemsContext.Provider value={{ todoItems: todoItems, addNewItems: addNewItems, deleteItems: deleteItems }} >
      <center className="todo-container">
        <AppName />
        <AppTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider >
  );
}

export default App
