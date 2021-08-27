import React, {useState} from 'react';
import { Button }  from '@material-ui/core';

import MessageInput from './MessageInput';

function Body() {

    const messageLayout = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        display: "flex",
        justifyContent: "center",
        marginTop: "500px",
    };

    const buttonMargin = {
        marginLeft: "50px",
    }

    return(
      <>
       {/* 
            메시지 입력창, 전송버튼, 대화내용 컴포넌트가 들어와야
       */}
       <div style={messageLayout}>
            <MessageInput/>
            <Button style={buttonMargin} variant="contained" color="primary">전송</Button>
       </div>
      </>
    );
  }
  
  export default Body;