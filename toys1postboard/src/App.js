import React from 'react';
import {
  BrowserRouter as Router,Switch,Route} from "react-router-dom";
import PostBoard from './Components/PostBoard.js';
import Profile from './Components/Profile.js';
import styles from './Styles/style.css';

function App() {
  const spanStyle = {
    fontSize: 50
  }
  
  return (
    <div>
      <div className="top-bar">
        <span style={spanStyle}>커뮤니티</span>
        <a className= "login-margin"href="www.naver.com">로그인</a>
        <a className= "register-margin"href="www.naver.com">회원가입</a>
      </div>
      <Router>
          <Switch>
          <Route exact path="/">
            <PostBoard/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
