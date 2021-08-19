import React from 'react';
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";

import PostBoard from './Components/PostBoard.js';
import Profile from './Components/Profile.js';
import LogIn from './Components/LogIn.js';
import Register from './Components/Register.js';

import styles from './Styles/style.css';

function App() {
  const spanStyle = {
    fontSize: 50
  }
  
  return (
    <div>
      <Router>
      <div className="top-bar">
        <Link to='/' style={spanStyle}>커뮤니티</Link>
        <Link className="login-margin" to="/login">로그인</Link>
        <Link className="register-margin" to="/register">회원가입</Link>
      </div>
          <Switch>

            <Route exact path="/">
              <PostBoard/>
            </Route>

            <Route path="/profile">
              <Profile/>
            </Route>

            <Route path="/login">
              <LogIn/>
            </Route>

            <Route path="/register">
              <Register/>
            </Route>
            
          </Switch>
      </Router>
    </div>
  );
}

export default App;
