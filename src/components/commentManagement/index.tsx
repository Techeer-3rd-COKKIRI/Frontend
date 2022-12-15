import React from 'react';
import styled from 'styled-components';
import Comment from '../comment';

const CommentManagementPage = styled.div``;

const Comments = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  display: flex;
  & input {
    box-sizing: border-box;
    max-width: 1200px;
    width: 100%;
    height: 7rem;
    background: #f2f2f2;
    border-radius: 3rem;
    border: none;
    padding-left: 3rem;
    margin-bottom: 1.3rem;

    @media screen and (max-width: 1440px) {
      min-width: 100%;
    }
  }

  & button {
    min-width: 12rem;
    height: 5rem;
    position: relative;
    background: #e2e2e2;
    border-radius: 30px;
    border: none;
    left: -13rem;
    top: 0.8rem;
  }
`;
const CommentManagement = () => {
  return (
    <CommentManagementPage>
      <InputBox>
        <input placeholder="인증하기.."></input>
        <button>게시</button>
      </InputBox>
      <Comments>
        <Comment />
        <Comment />
      </Comments>
    </CommentManagementPage>
  );
};

export default CommentManagement;
