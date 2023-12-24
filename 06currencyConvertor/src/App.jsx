import { useState } from 'react'
import InputBox from './components/input'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount , setAmount] = useState(0);
  const [from , setFrom] = useState("usd");
  const [to , setTo] = useState("inr");
  const [convertedAmount , setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from)
  const actualKeys = currencyInfo[from]
  const options = Object.keys(actualKeys);
  
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }
  
  const convert = () => {
    setConvertedAmount(amount * actualKeys[to])
  }



  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert()
                         
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="from"
                              amount={amount}
                              onCurrencyChange={(currency) => setFrom(currency)}
                              currencyOptions={options}
                              selectCurrency={from}
                              onAmountChange={(amount) => setAmount(amount)}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              onClick={swap}
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To" 
                              amount={convertedAmount}
                              selectCurrency={to}
                              onCurrencyChange={(currency) => (setTo(currency))}
                              currencyOptions={options}
                              amountDisable
                              
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default App;