import { useCallback, useEffect, useState } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setnumAllow] = useState(true)
  const [charAllow, setCharAllow] = useState(false)
  const [passwd, setPasswd] = useState('pass')

  const passGen = useCallback(() => {
    let pass = ""
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"

    if (numAllow) str += '0123456789'
    if (charAllow) str += "`~!@#$%^&*()_+[]{};',./?"
    
    for (let i = 1; i <= length; i++) {
      let char = Math.round(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPasswd(pass)

  }, [length, numAllow, charAllow, setPasswd])

  useEffect(() => {
    passGen()
  }, [length, numAllow, charAllow, passGen])
  return (
    <>
      <div className="absolute flex">
        <h1 className="title fixed top-4 left-1/2 transform -translate-x-1/2 w-auto max-w-9xl px-4 py-1 flex items-center justify-center bg-purple-400 rounded-2xl font-mono text-white text-3xl  hover:shadow-2xl hover:shadow-purple-500/50 duration-300 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-400 "> Garma-Garam Masala Password 🔐</h1>

        {/* <div className="pass-gen w-full max-w-md mx-auto shadow-xl rounded-xl px my-8 text-orange-400 bg-gray-700">
          testing
        </div> */}

        <div className='absolute flex items-center justify-center w-xl top-36 shadow-md text-white bg-gray-700 rounded-lg ml-64'>
          password generator
          <div className="rounded-lg overflow-hidden">
            <input
              type="text"
              value={passwd}
              className='outline-none w-full font-mono py-1 px-3'
              placeholder='Password'
              readOnly
            />
            <button className='bg-cyan-400'>copy</button>

          </div>
          <div>
            <div>
              <input type="range" min={4} max={32} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
              <label>Length: {length}</label>
            </div>
            <div>
              <input
                type="checkbox" defaultChecked={numAllow} id='numberInput' onChange={() => {
                  setnumAllow((prev) => !prev);
                }} />
              <label htmlFor='numberInput'>Number</label>
            </div>
            <div>
              <input
                type="checkbox" defaultChecked={charAllow} id='charInput' onChange={() => {
                  setCharAllow((prev) => !prev);
                }} />
              <label htmlFor='charInput'>SpecialChar</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
