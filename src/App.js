import React, { useState } from 'react';

const App = () => {
  const [fullName, setFullName] = useState({
    fname:'',
    lname:'',
    email:'',
    phone:'',
  });
  const inputEvent = (event) => {
    const {name, value} = event.target;
    setFullName((preValue) =>{
      if(name === 'fname'){
        return{
          fname: value,
          lname: preValue.lname,
  email: preValue.email,
 
  phone: preValue.phone,
        };
      }else if(name === 'lname'){
        return{
          fname: preValue.fname,
          lname: value,
          email: preValue.email,
          phone: preValue.phone,
        };
      }else if(name === 'email'){
        return{
          fname: preValue.fname,
          lname: preValue.lname,
          email: value,
          phone: preValue.phone,
        };
      }else if(name === 'phone'){
        return{
          fname: preValue.fname,
          lname: preValue.lname,
          email: preValue.email,
          phone: value,
        };
      }
    })

  }
  const clickChange = (event) => {
    event.preventDefault();
    alert('Data Submited');
  }
  return (
    <>
      <form onSubmit={clickChange}>
        <div>
          <h1>Hello {fullName.fname} {fullName.lname}</h1>
          <p> {fullName.email}</p>
          <p> {fullName.phone}</p>
          <input type='text'
            placeholder='Enter your Name'
            name='fname'
            onChange={inputEvent}
            defaultValue={fullName.fname}
          /><br />
          <input type='text'
            placeholder='Enter your Name Last Name'
            name='lname'
            onChange={inputEvent}
            defaultValue={fullName.lname}
          /><br/>
          <input type='email'
            placeholder='Enter your Email ID'
            name='email'
            onChange={inputEvent}
            defaultValue={fullName.email}
          /><br/>
          <input type='number'
            placeholder='Enter your Phone Number'
            name='phone'
            onChange={inputEvent}
            defaultValue={fullName.phone}
          /><br/>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </>
  )
}
export default App;