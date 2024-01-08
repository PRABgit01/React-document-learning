import React, { useState } from "react";

export function UseStateHooks() {
  const [state, setState] = useState({ count: 4, theme: "red" });
  const count = state.count;
  const theme = state.theme;

  function decrmentCount() {
    setState((previousValue) => {
      return { ...previousValue, count: previousValue.count - 1 };
    });
    // setCount(count=>count - 1);
  }

  function incrmentCount() {
    // setCount(count + 1);
  }
  return (
    <div>
      <button onClick={decrmentCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrmentCount}>+</button>
    </div>
  );
}
