import React from 'react';
import PostItem from './PostItem';

//각각의 PostItem를 <a>로 감싸서 링크를 달아놓고,
//해당 링크가 해당 게시글의 본문과 이어지도록? // 다른 방법은 아직 잘..
const PostList = ({postListTitle, userDB})=>{    
    return(
        <>  
            {/* 아직은 귀찮게 일단 수동으로.. */}
            <div className="postList">
                <p>{postListTitle}</p>
                <a href="www.naver.com">
                <PostItem 
                writer={userDB[0].writer} 
                date={userDB[0].date} 
                title={userDB[0].title} 
                body={userDB[0].body} />
                </a>
                
                <a href="www.naver.com">
                <PostItem 
                writer={userDB[1].writer} 
                date={userDB[1].date} 
                title={userDB[1].title} 
                body={userDB[1].body} />
                </a>
            </div>
        </>
    )
}
  
export default PostList;