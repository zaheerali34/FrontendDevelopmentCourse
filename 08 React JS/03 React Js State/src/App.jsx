import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='container'>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count + 1)}>Count ++</button>
    </div>
  )
}

export default App