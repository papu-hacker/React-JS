// import { useState } from 'react'
import './App.css'

import { useState } from "react"

function App() {
  const [color, setColor] = useState('gray')

  // const changeColor = () => {
  //   setColor
  //   useState
  // }

  return (
    <>
      <div className="w-full h-screen duration-300" style={{ backgroundColor: color }}>
        <div className='absolute transform flex left-1/2 -translate-x-1/2 top-10 text-decoration-line: none; text-xl font-mono  space-x-4 items-center justify-center bg-gray-700 p-2 pr-6 pl-6 rounded-3xl'>
          <div className="flex flex-wrap px-3 py-1 gap-4" >
            <button
              onClick={() => setColor('white')} className='white text-black bg-white rounded-xl px-4 py-1'
            >white</button>
            <button
              onClick={() => setColor('black')} className='black text-white px-4 bg-black rounded-xl'
            >black</button>
            <button
              onClick={() => setColor('gray')} className='gray text-white px-4 bg-gray-500 rounded-xl'
            >gray</button>
            <button
              onClick={() => setColor('#C27AFF')} className='lavender text-white px-4 bg-purple-400 rounded-xl'
            >lavender</button>
            <button
              onClick={() => setColor('cyan')} className='cyan text-black px-4 bg-cyan-300 rounded-xl'
            >cyan</button>
            <button
              onClick={() => setColor('#7BF1A8')} className='green text-black px-4 bg-green-300 rounded-xl'
            >green</button>
            <button
              onClick={() => setColor('#FFF085')} className='yellow text-black px-4 bg-yellow-200 rounded-xl'
            >yellow</button>
            <button
              onClick={() => setColor('#FDA5D5')} className='pink text-black px-4 bg-pink-300 rounded-xl'
            >pink</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
