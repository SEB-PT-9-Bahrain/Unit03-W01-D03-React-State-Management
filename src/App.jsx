import { useState } from "react"

function App() {
  //    [stateName, updaterFunction] = useState(initialValue)
  const [count, setCount] = useState(0)


  function handleIncrease(){

  }
  return (
    <>
      <h1>React State Management</h1>

      <p>Count: {count}</p>
      <button onClick={handleIncrease}>+</button>
    </>
  )
}

export default App
