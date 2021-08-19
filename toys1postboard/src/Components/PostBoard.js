import React from 'react';
import PostList from './PostList.js';

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

const userDB2 = [
    {
        writer:"21학번/경제",
        date:'2021-8-19',
        title:'주식이...',
        body:'다 꼴았어요,,',
    },
    {
        writer:"19학번/전장공학",
        date:'2021-8-19',
        title:'비트가...',
        body:'나무아미타불,,',
    },
    
]

const PostBoard = ()=>{
    return(
        <div>
            <PostList postListTitle="현직자 멘토링" userDB={userDB1}/>
            <PostList postListTitle="취준 멘토링" userDB={userDB2}/>
        </div>
    )
}
  
export default PostBoard;