import Chai from "./chai"

function App() {

  let username = 'chaicode'

  return (
    <>
    <h1> Chai Aur React Vite </h1>
    <h1> injected: {username} </h1>
    <Chai />
    </>
  )
}

export default App
