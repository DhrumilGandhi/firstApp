import React, { useState } from 'react';

const App = () => {
  let [inc, setInc] = useState(0);

  let a = () => {
    setInc(inc + 1);
  }
  let b = () => {
    if (inc <= 0) {
      alert("O thi niche nai jay bhai");
      inc = 0;
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