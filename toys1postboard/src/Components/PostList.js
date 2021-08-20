import React from 'react';
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";

import PostItem from './PostItem';

//각각의 PostItem를 <a>로 감싸서 링크를 달아놓고,
//해당 링크가 해당 게시글의 본문과 이어지도록? // 다른 방법은 아직 잘..
const PostList = ({postListTitle, userDB})=>{    
    return(
        <>  
            {/* 아직은 귀찮게 일단 수동으로.. */}
            <div className="postList">
                <p>{postListTitle}</p>
                
                {/* 계속 이 Link관련해서 골머리를 앓았다. 암만 Link를 눌러도 빈 페이지만 나와서.
                그런데 Component폴더 밖의 App파일에서 PostBoard를 이미 Route에서 쓰는데
                또 PostBoard 내부의 이 PostList컴포넌트가  Route를 쓰니까 path가 꼬인 모양이었다.
                */}
                <Link to='/posting'>
                    <PostItem 
                    writer={userDB[0].writer} 
                    date={userDB[0].date} 
                    title={userDB[0].title} 
                    body={userDB[0].body} />
                </Link>
                
                <Link to='/posting2'>
                    <PostItem 
                    writer={userDB[1].writer} 
                    date={userDB[1].date} 
                    title={userDB[1].title} 
                    body={userDB[1].body} />
                </Link>
            </div>
        </>
    )
}
  
export default PostList;