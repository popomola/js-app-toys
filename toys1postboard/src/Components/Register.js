import React from 'react';

const Register = ()=>{
    return(
        <div>
            <form>
                <div>
                    <label for='major'>학과</label>
                    <input id='major' placeholder="학과"></input>
                </div>
                <div>
                    <label for='id'>아이디</label>
                    <input id='id' placeholder="아이디"></input>
                </div>
                <div>
                    <label for='password'>비밀번호</label>
                    <input id='password'placeholder="비밀번호"></input>
                </div>
            </form>
        </div>
    )
}

export default Register