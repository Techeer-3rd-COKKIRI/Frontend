import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/image/logo.png';
import mainElephant from '../../assets/image/mainElephant.png';
const Account = () => {
  return (
    <LeftBackground>
      <Logo>
        <img src={logo}></img>
      </Logo>
      <Logo2>
        <img src={mainElephant}></img>
        <Ment>
          코딩은 우리끼리 <br />
          함께, <br />
          코끼리에서
        </Ment>
      </Logo2>
    </LeftBackground>
  );
};

const LeftBackground = styled.div`
  background-color: #e9edf7;
  width: 60vw;
  height: 100%;
  box-shadow: 6px 0px 10px rgba(0, 0, 0, 0.25);
  z-index: 1;
  flex-shrink: 1;
  position: relative;
`;

const Logo = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  & img {
    position: absolute;
    top: 15px;
    left: 25px;
    width: 130px;
    height: 50px;
  }
`;

const Logo2 = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  margin-left: 100px;
  & img {
    position: absolute;
    bottom: 15px;
  }
`;

const Ment = styled.div`
  font-size: 5.5rem;
  font-weight: 500;
  margin-left: 15px;
  margin-top: 60px;
`;

export default Account;
