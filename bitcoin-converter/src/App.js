import { useEffect, useRef, useState } from "react";


const App = () => {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  const [value, setValue] = useState('')
  const [price, setPrice] = useState(1)
  const [symbol, setSymbol] = useState('')
  const [result, setResult] = useState(0);


  const onChange = function(e){
    setValue(e.target.value)
  }

  const optChange = (e)=>{
    setPrice(coins[e.target.selectedIndex-1].quotes.USD.price)
    setSymbol(coins[e.target.selectedIndex-1].name)
  }

  useEffect(()=>{
    setResult(value/price)
  },[value, price])

  useEffect(()=>{
    fetch('https://api.coinpaprika.com/v1/tickers')
    .then(response=>response.json())
    .then(data=>{
      setCoins(data)
      setLoading(false)
    })
  },[])

  return (
    <>
    {loading ? <h2>loading...</h2>: (
    <div>
      <h1>Coins</h1>
      <h4>How much do you have?</h4>$
      <input placeholder='$' type='number' value={value} onChange={onChange}></input>
      <div>
        <select onChange={optChange} disabled={value ? false : true}>
        <option>select coin</option>
        {coins.map((coin)=><option key={coin.id}>[{coin.symbol}] {coin.name} - ${coin.quotes.USD.price.toFixed(4)}
        </option>)}
        </select>
      </div>
      {
      <h5> You can get {result.toFixed(4)} {symbol} Coins </h5>
      }
    </div>
    )}
    </>
  )
}

export default App;