
import react from 'react';
import { Route, Switch } from 'react-router-dom';
import Logo from './Logo.svg';
import Home from './Header/Home';
import About from './Header/About';
import Products from './Header/Products';
import Contact from './Header/Contact';
import MainNav from './Navigation/MainNav';

function App() {
  return (
    <div>
      <img src={Logo} height={50} alt="logo"/>
      <MainNav/>
      <Switch>
      <Route path='/' exact> 
      <Home/> 
      </Route>
      <Route path='/about'> <About/> </Route>
      <Route path='/products'> <Products/> </Route>
      <Route path='/contact'> <Contact/> </Route>
      </Switch>
    </div>
  );
}

export default App;
