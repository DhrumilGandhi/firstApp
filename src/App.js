import React from 'react';
import {Route , Switch, Link} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';


const App = () =>{
  return(
    <>
    <nav>
      <ul>
        <Link className='link' to = '/'>Home</Link>
        <Link className='link' to = '/about'>About</Link>
        <Link className='link' to = '/contact'>Contact</Link>

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