import { useState, useEffect, useRef } from 'react';

interface Props {
  distance?: string;
}

const useNearScreen = ({ distance = '100px' }: Props = {}) => {
  const [isNearScreen, setShow] = useState(false);
  const element = useRef();

  useEffect(() => {
    let observer: IntersectionObserver;
    const onChange = (entries, observer: IntersectionObserver) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        observer.observe(el)
      }
    };

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      });

      observer.observe(element.current);

      return () => observer && observer.disconnect();
    });
  });
  return { isNearScreen, element };
};

export default useNearScreen;
