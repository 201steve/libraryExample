import { useState } from 'react';
import { loginServices } from './services/loginServices.js';

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    nickname: '',
  });
  const { email, password, nickname } = userInfo;
  const login = async () => {
    //* Component에서는 instance에 필요한 값만 보내고, response 처리
    try {
      const response = await loginServices.signUp(email, password, nickname);
      console.log(response);
    } catch (error) {
      if (error) {
        alert('돌아가');
      }

      // if (error.response.data.statusCode === 400) {
      //   alert(error.response.data.message);
      //   //이메일 형식으로 작성해주세요.
      // } else if (error.response.data.statusCode === 409) {
      //   alert(error.response.data.message);
      //   //존재하지 않는 유저입니다
      // }
    }
  };
  console.log(userInfo);
  const getUserInfo = e => {
    const { value, id } = e.target;
    setUserInfo(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '50px',
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderRadius: '20px',
      }}
    >
      <h2>회원가입</h2>
      <input
        placeholder={'이메일 입력해주세요'}
        value={email}
        id="email"
        onChange={getUserInfo}
        type="email"
        style={{
          width: '300px',
          height: '50px',
          marginBottom: '10px',
          paddingLeft: '10px',
          color: 'rgba(255,255,255,0.9)',
        }}
      />
      <input
        placeholder={'비밀번호 입력해주세요'}
        value={password}
        id="password"
        onChange={getUserInfo}
        type="password"
        style={{
          width: '300px',
          height: '50px',
          marginBottom: '10px',
          paddingLeft: '10px',
          color: 'rgba(255,255,255,0.9)',
        }}
      />
      <input
        placeholder={'닉네임을 입력해주세요'}
        value={nickname}
        id="nickname"
        onChange={getUserInfo}
        type="text"
        style={{
          width: '300px',
          height: '50px',
          marginBottom: '10px',
          paddingLeft: '10px',
          color: 'rgba(255,255,255,0.9)',
        }}
      />
      <button onClick={login}>Login 버튼</button>
    </div>
  );
};

export default SignUp;
