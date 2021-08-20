import React, { useState, useEffect, useRef } from 'react';
import Comment from './Comment';
import styled from 'styled-components';

export default function App() {
  const [data, setIsdata] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [target, setTarget] = useState(null);
  const viewport = useRef(null);

  // data fetch
  const getItems = () => {
    setIsLoading(true);
    fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`,
      {
        method: 'GET',
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setIsdata((prev) => prev.concat(data));
        setIsLoading(false);
      });
  };

  // // 초기 아이템 로딩
  useEffect(() => {
    getItems();
    // 이슈 1. page 증가x, 최신 page를 못찾았던 이슈
  }, []);

  // IntersectionObserver Callback
  const onIntersect = ([entry], observer) => {
    if (entry.isIntersecting) {
      // 이슈 3. 초기 마운트때 20개.
      if (!loading) {
        // 이슈 2. 무한 page 증식
        setPage((prev) => prev + 1);
      }
    }
  };

  // useEffect(() => {
  //   let observer;
  //   if (target) {
  //     observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
  //     observer.observe(target);
  //   }
  //   return () => observer && observer.disconnect();
  // }, [target, loading]);

  return (
    <Container>
      <Wrap ref={viewport}>
        {data.map(({ id, email, name }, index) => {
          return <Comment id={id} email={email} name={name} key={index} />;
        })}
      </Wrap>
      <div className="Loading">{loading && 'Loading...'}</div>
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
