import React from 'react';

import Post from './Post'


const PostBody = ({writerInfo, bodyDB})=>{
    return(
        <>
            <div>
                <Post writerInfo={writerInfo} body={bodyDB} />
            </div>
        </>
    )
}
  
export default PostBody;