import { useDispatch, useSelector } from 'react-redux'
import { 
  increment,
  decrement,
  incrementByAmount,
  reset
 } from './store/slices/counter/'
import './App.css'
import { useState } from 'react';

function App() {

  const { counter } = useSelector( (state, action) => state.counter);
  const dispatch =  useDispatch();
  
  const [numberIncrement, setNumberIncrement] = useState(2);

  return (
    <div className="App">
      <header className='App-header'>
        <p>Count is {counter}</p>
        <p>
          <button onClick={() => dispatch( increment() )}>
            Increment
          </button>
          <button onClick={() => dispatch( decrement() )}>
            Decrement
          </button>
          <input 
            type="number" 
            value={numberIncrement} 
            onChange={e => setNumberIncrement( Number(e.target.value) )}
          />
          <button onClick={() => dispatch( incrementByAmount( numberIncrement ) )}>
            Increment by {numberIncrement}
          </button>
          <button onClick={() => dispatch( reset() )}>
            Reset
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
