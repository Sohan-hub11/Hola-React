import AppName from "./components/AppName"
import AppTodo from "./components/AppTodo"
import "./App.css"
import TodoItems from "./components/TodoItems"
import { useState } from "react"
import WelcomeMessage from "./components/WelcomeMessage"

const App = () => {

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItems = (itemName, itemDueDate) => {
    console.log(`New items Added: ${itemName} Date: ${itemDueDate}`);

    //Using Functional Upadates rather than Spread Operator.
    setTodoItems((currItem) =>
      [...currItem, {
        name: itemName,
        dueDate: itemDueDate
      }]
    );
  };

  const handleDeleteItems = (todoItemsName) => {
    const newTodoItems = todoItems.filter((item) => item.name != todoItemsName)
    setTodoItems(newTodoItems);
    console.log(`${todoItemsName} : item deleted`);
  }
  return (
    <center className="todo-container">
      <AppName />
      <AppTodo onNewItem={handleNewItems} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItems} />
    </center>
  );
}

export default App
