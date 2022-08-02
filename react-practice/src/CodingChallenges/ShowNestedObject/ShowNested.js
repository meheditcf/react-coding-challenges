import React, { useState } from "react";

const DisplayNestedObject = ({nestedObject})=> {
    return (
        <>
        {
            Object.values(nestedObject).map((key, value) => {
                if (typeof key === "object"){
                  return(
                    <DisplayNestedObject nestedObject={key}/>
                  )
                }
                else {
                  return(
                    <p>{key}</p>
                  )
                }
            })
        }
        </>
    )
}

// const displayNestedObjectFunction = (nestedObject)=> {
//   Object.values(nestedObject).map((value)=> {
//     if(value && typeof value === 'object'){
//       return displayNestedObjectFunction(value);
//     }
//     else {
//       return (
//         <p>{value}</p>
//       )
//     }
//   })
// }

export default function ShowNested() {
  const [nestedObject, setNestedObject] = useState({
    taxi: "a car licensed to transport passengers in return for payment of a fare",
    food: {
      sushi:
        "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
      apple: {
        Honeycrisp:
          "an apple cultivar developed at the MAES Horticultural Research Center",
        Fuji: "an apple cultivar developed by growers at Tohoku Research Station",
      },
    },
  });
  return <div>
    <DisplayNestedObject nestedObject={nestedObject} />
  </div>;
}

