import React, { useState } from 'react'

export default function FuncState() {
    const[count, setCount] = useState(0)
  return (
    <div>FuncState 
      <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}
