import React from 'react';
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";

import PostBoard from './Components/PostBoard.js';
import Profile from './Components/Profile.js';
import LogIn from './Components/LogIn.js';
import Register from './Components/Register.js';
import PostBody from './Components/PostBody.js';


import styles from './Styles/style.css';

//일단 임시 데이터를 만들어놓자.
const userDB1 = [
  {
      writer:"20학번/금융",
      date:'2021-8-19',
      title:'고민이...',
      body:'제가요,,',
  },
  {
      writer:"18학번/기계공학",
      date:'2021-8-19',
      title:'인턴쉽...',
      body:'할렐루야,,',
  },
  
]

// const userDB2 = [
//     {
//         writer:"21학번/경제",
//         date:'2021-8-19',
//         title:'주식이...',
//         body:'다 꼴았어요,,',
//     },
//     {
//         writer:"19학번/전장공학",
//         date:'2021-8-19',
//         title:'비트가...',
//         body:'나무아미타불,,',
//     },
  
// ]
const bodyDB1 = [
 "주식이 흥해서 벼락 부자가 되었어요...",
 "어디서 인턴쉽을 해야할까욤?",
 
  
]

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
              <PostBoard userDB={userDB1}/>
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
            
            <Route path="/posting">
              <PostBody bodyDB={bodyDB1[0]}/>
            </Route>
            
            <Route path="/posting2">
              <PostBody bodyDB={bodyDB1[1]}/>
            </Route>
            
          </Switch>
      </Router>
    </div>
  );
}

export default App;
