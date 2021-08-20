import React, { useRef, useEffect } from 'react';

const FetchMore = ({ setPage }) => {
  const target = useRef(null);

  const callback = (entries) => {
    const target = entries[0];

    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
      console.log('화면에서 노출됨');
    } 
  };

  const observer = new IntersectionObserver(callback, { threshold: 0.5 });

  useEffect(() => {
    observer.observe(target.current);
    return () => {
      if (target.current) {
        observer.unobserve(target.current);
      }
    };
  }, []);

  return <div className={'loading'} ref={target} />;
};

export default FetchMore;
