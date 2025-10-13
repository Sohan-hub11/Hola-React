# 🧠 React State Management
State management in React controls how data changes over time and how those changes reflect in the UI. It ensures that your application updates automatically when data (state) changes — without needing to manually re-render components.

---

## ⚡ What is State?
In React, state is a built-in data store used to track dynamic information within a component.
    ```bash
      
      import { useState } from "react";
      
      function Counter() {
      const [count, setCount] = useState(0);

        return (
          <>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
          </>
        );
      }

✅ Explanation

- count → current value of the state
- setCount → function to update the state
- useState(0) → initializes count with 0
- Every time you call setCount(), React automatically re-renders the component with the new value.

---

## 🧩 Why State Management is Important
- Keeps your UI and data synchronized
- Allows interactive features like input handling, toggles, and counters
- Makes components reactive instead of static
- Simplifies data flow and updates across your app

---

## 🧱 Types of State in React
- <b>Local State</b> :  Managed within a single component using useState(). <br>
                    Example-- Input fields, counters
- <b>Lifted State</b> :	Shared by moving state up to a common parent and passing it as props. <br>
                    Example-- Passing user input between components
- <b>Global State</b> :	Shared across the entire app. <br>
                    Example-- Using Context API, Redux, or other libraries

---

## 🧰 State Management in This Project
This project demonstrates multiple state management examples:

- App.js :
-- Uses useState to store text entered by the user.
-- Passes handleOnChange to update the text dynamically.

- Fooditems.js :
-- Manages the list of “bought” food items using its own state (activeItems).
-- Updates state when the “Buy” button is clicked.
-- Automatic Re-rendering
-- When state updates, React automatically refreshes only the affected components — making UI updates efficient and smooth.

---

## 💡 Best Practices

- Always use the state updater function (e.g., setStateFn(value)), never reassign state variables directly.
- Initialize state properly — e.g., useState([]) for arrays, useState('') for strings.
- Keep state as minimal as possible — derive data instead of storing duplicates.
- For large apps, consider Context API, Redux, or Zustand for global state.
