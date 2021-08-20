import React from 'react';
import Modal from 'react-modal';
import {useState} from 'react';

import Comment from './Comment';

const Post = ({writerInfo, body})=>{
    const [modalIsOpen, setIsOpen] = useState(true);
    return(
        <>
        {/* 따로 해보니까 모달 자체는 잘 나온다. Route에 문제가 있어서 얘가 화면에 안 뜨는 것. */}
            <Modal isOpen={modalIsOpen}>
            <p>{writerInfo}</p>
            <p>{body}</p>
            <button onClick={()=>{setIsOpen(false)}}>닫기</button>
            <Comment />
            </Modal>
        </>
    )
}
  
export default Post;