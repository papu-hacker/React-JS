import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  // console.log(useState(1));

  // let counter = 0;
  const addValue = () => {
    counter++
    setCounter(counter)
  }
  const removeValue = () => {
    if (counter > 0) {
      counter--
      setCounter(counter)
    }
  }

  return (
    <>
      <h1 class='head'>testing</h1>
      <h2 class='head'>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Del Value</button>

      <div >
        <h1 class='counter1'>{counter}</h1>
        <h2 class='counter'>{counter}</h2>
        <h3 class='counter1'>{counter}</h3>
        <h4 class='counter'>{counter}</h4>
        <h5 class='counter1'>{counter}</h5>
        <h6 class='counter'>{counter}</h6>
      </div>
    </>
  )
}

export default App
