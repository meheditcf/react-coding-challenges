import React, { useContext } from 'react'
import countContext from './Context'

export default function Child() {
    const context = useContext(countContext);
    const {changeCount} = context;
  return (
    <div>
        <button onClick={changeCount}>Increase Count</button>
    </div>
  )
}
