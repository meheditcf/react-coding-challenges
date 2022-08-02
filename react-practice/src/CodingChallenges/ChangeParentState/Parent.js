import { useState } from "react";
import Child from "./Child";
import React from 'react';

export default function Parent() {
  const [value, setValue] = useState(
    "I need to be updated from my child"
  );

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child value={value} setValue={setValue}></Child>
      </div>
    </>
  );
}
