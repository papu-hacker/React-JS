import { useState } from 'react'
// import InputBox from './components/InputBox'
import { InputBox } from './components'
import useRupeeInfo from './hooks/useRupeeInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('inr')
  const [to, setTo] = useState('rub')
  const [convetedAmt, setConvetedAmt] = useState(0)

  const currInfo = useRupeeInfo(from)
  const options = Object.keys(currInfo)

  const convert = () => {
    setConvetedAmt(amount * currInfo[to])
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvetedAmt(amount)
    setAmount(convetedAmt)
  }

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.bhdw.net/im/dark-nature-sunset-wallpaper-120990_w635.webp')`}}>
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/15">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert()
              }}>
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setAmount(amount)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-purple-600 text-white px-2 py-0.5"
                  onClick={swap}>
                  ⇅
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convetedAmt}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
