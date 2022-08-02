import React from 'react';

export default function Child({
  value, setValue
}) {
    return (
      <>
        <div>Child</div>
        <button onClick={()=> setValue("Parent value changed")}>Change Parent Value</button>
      </>
    );
  }