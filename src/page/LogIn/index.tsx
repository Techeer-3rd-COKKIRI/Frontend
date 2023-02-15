import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import logo from '../../assets/image/logo.png';
import { useMutation } from '@tanstack/react-query';
import { restFetcher } from '@/queryClient';
import { User, userInform } from '@/type/user';
import Account from '@/components/account';

const LogIn = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<userInform>();

  // console.log(watch());
  // 1.유효성검사 추가하기
  // 2.유효성검사 실패시 에러핸들링하기
  const { mutate } = useMutation((user: userInform) =>
    restFetcher({ method: 'POST', path: '/api/v1/users/login', body: user }),
  );

  const onSubmitHandler: SubmitHandler<userInform> = async (values, e) => {
    const { username, password } = values;
    const user = { username, password };
    mutate(user, {
      onSuccess: (data) => {
        if (data) {
          //로그인이 되었다면?
          const loginUser: User = {
            id: data.data.id,
            username: data.data.username,
          };
          //객체를 저장할떈 stringify 다시 뺄떈 parse
          localStorage.setItem('user', JSON.stringify(loginUser));
          alert('로그인에 성공하셨습니다 !');
          navigate('/');
        } else {
          alert('로그인에 실패하셨습니다 !');
        }
      },
      onError: (data) => {
        console.log(data);
        console.log('로그인에 실패하셨습니다 !');
      },
    });
  };
  //로그인버튼을 누르면 mutate trigger

  return (
    <LoginPage>
      <Logo onClick={() => navigate('/')}>
        <img src={logo} alt="누르면 메인으로 가는 로고"></img>
      </Logo>
      <Account></Account>
      <DoLogin>
        <h1>Sign In</h1>
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
          <UserInput
            {...register('username', { required: true })}
            placeholder={'아이디를 입력해주세요'}
          />
          <UserInput
            {...register('password', { required: true })}
            type="password"
            placeholder={'비밀번호를 입력해주세요'}
          />
          {/* {errors.id ? (
          <Error style={{ height: '10px' }}>{errors.id.message}</Error>
        ) : (
          <Error style={{ height: '10px' }}></Error>
        )}
        {errors.password ? (
          <Error style={{ height: '10px' }}>{errors.password.message}</Error>
        ) : (
          <Error style={{ height: '10px' }}></Error>
        )} */}
          <Error />
          <Buttons>
            <button type="submit">Sign In</button>
            <button onClick={() => navigate('/signup')}>Create Account</button>
          </Buttons>
        </Form>
      </DoLogin>
    </LoginPage>
  );
};

export default LogIn;

const LoginPage = styled.div`
  display: flex;

  @media screen and (max-width: 1080px) {
    justify-content: center;
  }
`;

const Logo = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 2.5rem;
  & > img {
    width: 130px;
    height: 50px;
  }
  @media screen and (max-width: 700px) {
    & > img {
      width: 100px;
      height: 40px;
    }
  }
`;

// export const LoginIntroduce = styled.div`
//   width: 55vw;
//   height: 100vh;
//   background: #e9edf7;
//   flex-shrink: 1;
//   box-shadow: 6px 0px 10px rgba(0, 0, 0, 0.25);

//   @media screen and (max-width: 900px) {
//     display: none;
//   }
// `;

const DoLogin = styled.div`
  display: flex;
  width: 45vw;
  flex-direction: column;
  align-items: center;
  min-width: 350px;
  height: 100vh;
  overflow: scroll;
  max-height: 100vh;

  & > h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 60px;
    margin: 100px 0;
    margin-top: 150px;
    color: #000000;
    text-align: center;
  }

  @media screen and (max-width: 850px) {
    max-width: 100vw;
    & > h1 {
      font-size: 40px;
      margin: 100px 0;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const UserInput = styled.input`
  width: 80%;
  min-height: 50px;
  max-width: 400px;
  min-width: 400px;
  background: #ffffff;
  border: 1px solid #293659;
  border-radius: 20px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 850px) {
    min-width: 300px;
  }
`;

const Error = styled.div`
  height: 100px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > button {
    background: #7e84ff;
    border: 1px solid #ffffff;
    border-radius: 20px;
    min-width: 400px;
    height: 50px;
    color: rgba(255, 255, 255, 1);
    margin-bottom: 20px;
    cursor: pointer;
    @media screen and (max-width: 850px) {
      min-width: 300px;
    }
  }
`;
