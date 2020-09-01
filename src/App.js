import React, { useState } from 'react';

const App = () => {
  const [inc, setInc] = useState(0);

  const a = () => {
    setInc(inc + 1);
  }
  const b = () => {
    if (inc <= 0) {
      alert("O thi niche nai jay bhai");
      setInc(0);
    }
    else {
      setInc(inc - 1);
    }
  }
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <h1>{inc}</h1><br />
          <button onClick={a} >Increment</button>
          <button onClick={b} >Decrement</button>
        </div>
      </div>
    </>
  )
}
export default App;