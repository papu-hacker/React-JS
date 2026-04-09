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
    if (charAllow) str += "~!@#₹%^&*()_+[]{};/?"

    for (let i = 0; i < length; i++) {
      const idx = Math.floor(Math.random() * str.length)
      pass += str.charAt(idx)
    }
    setPasswd(pass)
  }, [length, numAllow, charAllow, setPasswd])

  useEffect(() => {
    passGen()
  }, [length, numAllow, charAllow, passGen])

  let [change, setChange] = useState(undefined)
  const change_pass = () => {
    change = passGen
    setChange(change)
  }

  return (
    <div className="min-h-screen p-6 font-mono duration-150" style={{ backgroundColor: color }}>
      <header className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <h1 className="bg-purple-400 text-white text-2xl md:text-3xl px-5 py-2 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-200">
          Garma-Garam Masala Password 🔐
        </h1>
      </header>

      <button className='bg-amber-100 text-black text-xl rounded-2xl px-1 mr-2' onClick={() => {
        setColor('#fff')
      }}
      >☀️</button>
      <button className='bg-gray-600 text-white text-xl rounded-2xl px-1' onClick={() => {
        setColor('#111111')
      }}
      >🌙</button>

      <main className="mt-44 flex justify-center">
        <div className="w-full max-w-2xl bg-gray-800 text-white rounded-xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1 md:col-span-2 flex flex-col items-stretch gap-3">
            <div className="bg-gray-700 rounded-lg overflow-hidden flex items-center text-emerald-200">
              <input
                type="text"
                value={passwd}
                readOnly
                className="w-full px-4 py-3 bg-transparent outline-none"
              />
              <button
                onClick={() => navigator.clipboard?.writeText(passwd)}
                className="bg-emerald-300 text-gray-900 px-3 py-3 hover:bg-emerald-400 active:bg-emerald-400 transition rounded-l-md font-extrabold"
              >
                Copy
              </button>
              <button onClick={() => { change_pass() }}
                className='p-3 bg-red-300 text-gray-900 px-3 py-3 hover:bg-orange-400 active:bg-orange-400 transition font-extrabold'>New</button>
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
                className="h-4 w-4 accent-purple-400"
              />
              <label htmlFor="numberInput" className="text-sm text-gray-200">Numbers</label>
            </div>

            <div className="flex items-center gap-2">
              <input
                id="charInput"
                type="checkbox"
                checked={charAllow}
                onChange={() => setCharAllow((v) => !v)}
                className="h-4 w-4 accent-purple-400"
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
