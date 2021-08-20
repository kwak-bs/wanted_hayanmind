import React from 'react';
import styled from 'styled-components';

export default function Comment({ data }) {
  return (
    <div>
      {data.map(({ id, email, name },index) => {
        return (
          <CommentContainer key={index}>
            <CommentBox>
              <Title>Comment ld</Title>
              <Context>{id}</Context>
            </CommentBox>
            <CommentBox>
              <Title>Email</Title>
              <Context>{email}</Context>
            </CommentBox>
            <div>
              <Title>Comment</Title>
              <Context>{name}</Context>
            </div>
          </CommentContainer>
        );
      })}
    </div>
  );
}

const CommentContainer = styled.div`
  width: 100%;
  padding: 20px;
  margin: 10px 0;
  border-radius: 20px;
  background-color: #f8f9fa;
  border: 1px solid gray;
`;

const CommentBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.div`
  margin: 10px 10px 10px 0;
  font-size: 18px;
  font-weight: bold;
  color: #212529;
`;

const Context = styled.div`
  font-size: 18px;
`;
