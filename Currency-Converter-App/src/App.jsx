import {useState} from 'react'

import { Card } from "./components/index.js"
import useCurrencyInfo from "../src/customhooks/useCurrencyInfo.js"

function App() {
  
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("INR")
  const [convertedAmount , setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap =()=>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert =()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <>
      <div className="w-full h-screen bg-[#25d568] ">
        <div className="bg-[#ffffff] fixed flex  flex-col top-10 inset-x-120 justify-center rounded-3xl p-6 gap-5 border-[#4fdf87] border-10">
           <h1 className="text-3xl text-[#072621] p-5 font-bold text-center">Currency Converter</h1>
           <Card medium="From" amount={amount} onAmountChange={(amount)=> setAmount(amount)} currencyOptions={options}  onCurrencyChange = {(currency)=> setFrom(currency)} selectCurrency={from} />
          <button className='bg-[#26d367] rounded-b-3xl p-3 text-xl text-[#072621] font-bold fixed inset-x-170 top-89' onClick={swap}>swap</button>
           <Card medium="To" amount={convertedAmount} currencyOptions={options} onCurrencyChange = {(currency)=> setTo(currency)} selectCurrency={to} amountDisable={true}/> 
           <button className='bg-[#26d367] rounded-2xl p-3 text-xl text-[#072621] font-bold' onClick={convert}>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
           
        </div>
      </div>
    </>
  )
}

export default App
