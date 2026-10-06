import { useState } from "react"

function App() {
  //    [stateName, updaterFunction] = useState(initialValue)
  const [count, setCount] = useState(0)


  function handleIncrease(){
    setCount(count + 1)
  }

  // Exercise 1:
  // 1. make a - button
  // 2. when this button is clicked the count should go down
  // 3. BONUS: if the count is 0 dont go down
  // 4. BONUS BONUS: Make a reset button that resets the count to 0
  return (
    <>
      <h1>React State Management</h1>

      <p>Count: {count}</p>
      <button onClick={handleIncrease}>+</button>
    </>
  )
}

export default App
