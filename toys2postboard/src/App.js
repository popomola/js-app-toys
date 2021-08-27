import React, {useState} from 'react';
import { Button }  from '@material-ui/core';
import Modal from 'react-modal';
import { Container } from '@material-ui/core';

import Body from './Body.js';

function App() {
  return(
    <>
     {/* 
          대화가 이뤄지는 공간
          말풍선(상대, 내 꺼. 색만 다르게.)
          메시지 입력 공간
          전송버튼


          서버에 있는 온라인 상태의 아무나를 매칭시켜준다.
            온라인 상태를 어떻게 구현할 것인가?
     */}
      {/* 컨테이너는 레이아웃 */}
      <Container maxWidth="sm">
        <Body />
      </Container>
    </>
  );
}

export default App;
