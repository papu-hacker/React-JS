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
    // counter++
    setCounter(counter + 1)
  }
  const removeValue = () => {
    if (counter > 0) {
      // counter--
      setCounter(counter - 1)
    }
  }

  return (
    <>
      {/* <h1 class='head'>testing</h1> */}
      <h1 class='head'>Counter Value: {counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Del Value</button>

      <div className='Result-div' >
        <h1 className='counter1'> {counter} </h1>
        <h1 className='counter'> {counter} </h1>
        <h3 className='counter1'> {counter} </h3>
        <h3 className='counter'> {counter} </h3>
        {/* <h5 className='counter1'>{counter}</h5>
        <h6 className='counter'>{counter}</h6> */}
      </div>
    </>
  )
}

export default App
