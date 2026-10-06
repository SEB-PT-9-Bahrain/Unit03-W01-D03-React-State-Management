

function App() {
  let count = 0

  function handleIncrease(){
    count+= 1
    console.log(count)
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
