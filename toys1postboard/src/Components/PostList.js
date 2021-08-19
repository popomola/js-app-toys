import React from 'react';
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";

import PostItem from './PostItem';
import PostBody from './PostBody';
import PostBoard from './PostBoard';

//각각의 PostItem를 <a>로 감싸서 링크를 달아놓고,
//해당 링크가 해당 게시글의 본문과 이어지도록? // 다른 방법은 아직 잘..
const PostList = ({postListTitle, userDB})=>{    
    return(
        <>  
            {/* 아직은 귀찮게 일단 수동으로.. */}
            <div className="postList">
                <p>{postListTitle}</p>
                
                <Router>
                    <Link to={`/postbody${userDB[0].writer}`}>
                    <PostItem 
                    writer={userDB[0].writer} 
                    date={userDB[0].date} 
                    title={userDB[0].title} 
                    body={userDB[0].body} />
                    </Link>
                    
                    <Link to={`/postbody${userDB[1].writer}`}>
                    <PostItem 
                    writer={userDB[1].writer} 
                    date={userDB[1].date} 
                    title={userDB[1].title} 
                    body={userDB[1].body} />
                    </Link>

                    <Switch>

                        <Route path={`/postbody${userDB[0].writer}`}>
                            <PostBody writerInfo={userDB[0].writer}/>
                        </Route>

                        <Route path={`/postbody${userDB[1].writer}`}>
                            <PostBody writerInfo={userDB[1].writer}/>
                        </Route>

                    </Switch>
                </Router>
            </div>
        </>
    )
}
  
export default PostList;