import React, {useState} from 'react';
import { Button }  from '@material-ui/core';
import Modal from 'react-modal';

import PostBody from './PostBody';

const textDB = [

  '고민이 생겼어요. 저는 사실 바보입니다...',
  '고민이 생겼어요. 저는 사실 주식을 사랑합니다...',
]

function App() {
  const [IsOpen, setIsOpen] = useState(false)

  return (
    <div>
      
      <Modal isOpen={IsOpen} ariaHideApp={false}>
        <Button onClick={() => {setIsOpen(false)}} color='secondary'>
          창닫기
        </Button>   
      </Modal>

      <>
        <Button onClick={() => {setIsOpen(true)}} color='primary'>
          <PostBody maintext={textDB[0]}/>
        </Button>
        <Button onClick={() => {setIsOpen(true)}} color='primary'>
          <PostBody maintext={textDB[1]}/>
        </Button>
      </>

    </div>
  );
}

export default App;
