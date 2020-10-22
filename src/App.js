import React from 'react';
import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import SignInAndSignOut from './Pages/sign-in-and-sing-out/sign-in-and-sing-out.component';
import Header from './Components/header/header.component';

import './App.css';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignOut} />
      </Switch>
      
    </div>
  );
}

export default App;
