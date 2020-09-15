import React from 'react';
import {Route , Switch, NavLink} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';


const App = () =>{
  return(
    <>
    <nav>
      <ul>
        <NavLink activeClassName='nlink' exact className='link' to = '/'>Home</NavLink>
        <NavLink activeClassName='nlink' className='link' to = '/about'>About</NavLink>
        <NavLink activeClassName='nlink' className='link' to = '/contact'>Contact</NavLink>

      </ul>
    </nav>
      <Switch>
        <Route exact path='/' component = {Home} />
        <Route path='/about' component = {About} />
        <Route path='/contact' component = {Contact} />
      </Switch>
    </>
  )
}

export default App;