import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  const [num, setNum] = useState(0);
  const click=() =>{
    setNum(num+1)
    
  }
  useEffect(()=>{
    document.title = `you click me ${num} time`;
  },[num])

  return (
    <>
    <button onClick={click} >click me {num}</button>
      {/* <h1>This is App</h1> */}
    </>
  )
}

export default App;