import React from 'react';
import PostList from './PostList.js';

const PostBoard = ({userDB})=>{
    return(
        <div>
            <PostList postListTitle="현직자 멘토링" userDB={userDB}/>
            {/* <PostList postListTitle="취준 멘토링" userDB={userDB}/> */}
        </div>
    )
}
export default PostBoard;