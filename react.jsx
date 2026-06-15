import { useReducer } from "react";

function reducer(state, action) {

  switch (action.type) {

    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    default:
      return state;
  }
}

function App() {

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>

      <h1>Count: {count}</h1>

      <button
        onClick={() => dispatch({ type: "increment" })}
      >
        Increase
      </button>

      <button
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrease
      </button>

    </div>
  );
}

export default App;
