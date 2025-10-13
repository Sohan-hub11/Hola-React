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
