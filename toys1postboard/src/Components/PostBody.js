import React from 'react';

import Post from './Post'

const bodyDB1 = [
 
"제가 주식을 시작했는데... 벼락부자가 되었습니다.",

] 

const PostBody = ({writerInfo})=>{
    return(
        <div>
            <Post writerInfo={writerInfo} body={bodyDB1}/>
        </div>
    )
}
  
export default PostBody;