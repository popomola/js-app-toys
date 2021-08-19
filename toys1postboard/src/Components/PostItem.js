import React from 'react';

//기본적으로 게시글의 정보들은 사용자로부터 직접 입력을 받는다. 
//단, 시간 데이터와 작성자닉네임은 자동으로 받는다.
//바디에는 본문의 내용 중 첫 부분마 들어가도록
const PostItem = ({writer, date, title, body})=>{
    return(
        <>
            <div className="postItem">
                <span>{title + " **"}</span><span>{writer +" " + date}</span>
                <div>
                    <span>{body}</span>
                </div>
                <br/>
            </div>
        </>
    )
}
  
export default PostItem;