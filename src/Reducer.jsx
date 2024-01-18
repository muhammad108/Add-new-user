import React, { useReducer } from 'react';

function Reducer() {
  const initialState = 0;

  const reducer = (state, action) => {
    if (action.type === "increment") {
      return state + 1; // Incrementing the state by 1
    }
    if (action.type === "decrement") {
      return state - 1; // Decrementing the state by 1
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </div>
  );
}

export default Reducer;
