import React from 'react';

const Post = ({writerInfo, body})=>{
    return(
        <div>
            <div>
                {writerInfo}
            </div>
            <div>
                {body}
            </div>
        </div>
    )
}
  
export default Post;