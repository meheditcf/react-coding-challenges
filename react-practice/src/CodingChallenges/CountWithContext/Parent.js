import React, { useState } from "react";
import Child from "./Child";
import countContext from "./Context";

export default function ParentCount() {
  const [count, setCount] = useState(0);
  const changeCount = () => {
    setCount(count + 1);
  };
  return (
    <countContext.Provider value={{ count, changeCount }}>
      <div>
        <Child></Child>
        <h1> {count}</h1>
      </div>
    </countContext.Provider>
  );
}
