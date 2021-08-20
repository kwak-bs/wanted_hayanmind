import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import styled from 'styled-components';
import { getComments } from './api/getComment';
import FetchMore from './FetchMore';

export default function App() {
  const [data, setIsdata] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getItems = async () => {
    setIsLoading(true);
    const fetchData = await getComments(page);
    setIsdata((prev) => prev.concat(fetchData));
    setIsLoading(false);
  };

  useEffect(() => {
    getItems();
  }, [page]);

  return (
    <Container>
      <Wrap>
        {data.map(({ id, email, name }, index) => {
          return <Comment id={id} email={email} name={name} key={index} />;
        })}
      </Wrap>
      {loading ? 'Loading...' : <FetchMore setPage={setPage} />}
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
