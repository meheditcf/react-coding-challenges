import React, { useState } from "react";

export default function AddRemoveList() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const changeValue = (e) => {
    setValue(e.target.value);
  };
  const addToList = () => {
    setList([...list, value]);
    setValue('');
  };
  const removeFromList = (item) => {
    const removedList = list.filter((el)=> el!==item);
    setList(removedList);
  }
  return (
    <div>
      <input type="text" value={value} onChange={changeValue} />
      <button onClick={addToList}>Add</button>
      <ul>
        {list &&
          list.length > 0 &&
          list.map((item) => 
            <li onClick={()=> removeFromList(item)}>{item}</li>
          )}
      </ul>
    </div>
  );
}
