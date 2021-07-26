import React, { useState, useEffect } from 'react';
import Comment from './component/Comment/Comment';
import styled from 'styled-components';

export default function App() {
  const [data, setIsdata] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => setIsdata(data));
  }, []);

  console.log(data);

  return (
    <Container>
      <Wrap>
        <Comment data={data} />
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const Wrap = styled.div`
  width: 500px;
  margin-top: 26px;
`;
