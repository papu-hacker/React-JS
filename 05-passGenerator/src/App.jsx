import { useCallback, useEffect, useState } from 'react'
// import './App.css'

function App() {
  const [color, setColor] = useState('#111111')
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(true)
  const [charAllow, setCharAllow] = useState(false)
  const [passwd, setPasswd] = useState('pass')

  const passGen = useCallback(() => {
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    if (numAllow) str += '0123456789'
    if (charAllow) str += "`~!@#$%^&*()_+[]{};',./?"

    for (let i = 0; i < length; i++) {
      const idx = Math.floor(Math.random() * str.length)
      pass += str.charAt(idx)
    }

    setPasswd(pass)
  }, [length, numAllow, charAllow, setPasswd])

  useEffect(() => {
    passGen()
  }, [length, numAllow, charAllow, passGen])

  return (
    <div className="min-h-screen p-6 font-mono" style={{backgroundColor: color}}>
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2">
        <h1 className="bg-purple-400 text-white text-2xl md:text-3xl px-5 py-2 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-200">
          Garma-Garam Masala Password 🔐
        </h1>
      </header>

      <button className='bg-amber-400 text-black text-xl rounded-2xl px-1' onClick={()=>{
        setColor('white')
      }}
      >day☀️</button>

      <main className="mt-28 flex justify-center">
        <div className="w-full max-w-2xl bg-gray-800 text-white rounded-xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1 md:col-span-2 flex flex-col items-stretch gap-3">
            <div className="bg-gray-700 rounded-lg overflow-hidden flex items-center">
              <input
                type="text"
                value={passwd}
                readOnly
                className="w-full px-4 py-3 bg-transparent outline-none"
              />
              <button
                onClick={() => navigator.clipboard?.writeText(passwd)}
                className="bg-cyan-400 text-gray-900 px-3 py-3 hover:bg-cyan-500 transition rounded-xl font-extrabold"
              >
                Copy
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-sm text-gray-300">Length: <span>{length}</span></label>
            <input
              type="range"
              min={4}
              max={32}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full accent-purple-400 "
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <input
                id="numberInput"
                type="checkbox"
                checked={numAllow}
                onChange={() => setNumAllow((v) => !v)}
                className="h-4 w-4 accent-purple-500"
              />
              <label htmlFor="numberInput" className="text-sm text-gray-200">Numbers</label>
            </div>

            <div className="flex items-center gap-2">
              <input
                id="charInput"
                type="checkbox"
                checked={charAllow}
                onChange={() => setCharAllow((v) => !v)}
                className="h-4 w-4 accent-purple-500"
              />
              <label htmlFor="charInput" className="text-sm text-gray-200">Special Characters</label>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
