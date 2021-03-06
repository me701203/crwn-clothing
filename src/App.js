import React from 'react';
import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import SignInAndSignOut from './Pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import Header from './Components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {Switch, Route} from 'react-router-dom';

import './App.css';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }
  
unsubscribeFromAuth = null

componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  if (userAuth) {
    const userRef = await createUserProfileDocument(userAuth);

    userRef.onSnapshot(snapShot => {
      this.setState({
        currentUser: {
          id: snapShot.id,
          ...snapShot.data()
        }
      });
    });
  } else {
    this.setState({currentUser: userAuth})
  }
  })
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
}

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignOut} />
        </Switch>
        
      </div>
    );

  }

  
}

export default App;
