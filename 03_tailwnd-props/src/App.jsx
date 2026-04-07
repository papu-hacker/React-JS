import Card from './components/Card'
import GB_btn from './components/GB_btn'
import Lagecy_btn from './components/Legacy_Button'
import Price from './components/Pricing'
import MagicCard from './components/MagicCard'
import './App.css'
import './components/MGCard.css'

function App() {

  // let obj = {
  //   name:'hrishi',
  //   age: 20
  // }
  // let arr = [1,2,3]

  return (
    <>
      <h1 className='bg-purple-500 font-sans p-6 rounded-2xl '>TailWindCSS Testing </h1>

      <Card name="A♣️" logo="♣️" /> {/* myObj={obj} myArr={arr} */}
      <Card name="J♠️" logo="♠️" />  {/*myObj={obj} myArr={arr}*/} 
      <GB_btn />
      <Lagecy_btn />
      <MagicCard Brand={'Garud'}/>
      <Price />

    </>
  )
}

export default App
