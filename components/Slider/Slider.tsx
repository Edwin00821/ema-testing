import { Box } from '@mui/material';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import { Button } from './';

interface Props {
  controls?: boolean;
  autoplay?: boolean;
  velocity?: number;
  interval?: number;
  children: React.ReactNode;
}
const Slider = ({
  controls,
  autoplay,
  velocity,
  interval,
  children,
}: Props) => {
  const slideShow = useRef(null);
  const intervallideshow = useRef(null);

  const next = useCallback(() => {
    // Comprobamos que el slideShow tenga elementos
    if (slideShow.current.children.length > 0) {
      console.log('Siguiente');

      // Obtenemos el primer elemento del slideShow.
      const primerElemento = slideShow.current.children[0];

      // Establecemos la transicion para el slideShow.
      slideShow.current.style.transition = `${velocity}ms ease-out all`;

      const tamañoSlide = slideShow.current.children[0].offsetWidth;

      // Movemos el slideShow
      slideShow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      const transicion = () => {
        // Reiniciamos la posicion del Slideshow.
        slideShow.current.style.transition = 'none';
        slideShow.current.style.transform = `translateX(0)`;

        // Tomamos el primer elemento y lo mandamos al final.
        slideShow.current.appendChild(primerElemento);

        slideShow.current.removeEventListener('transitionend', transicion);
      };

      // Eventlistener para cuando termina la animacion.
      slideShow.current.addEventListener('transitionend', transicion);
    }
  }, [velocity]);

  const previous = () => {
    console.log('Anterior');
    if (slideShow.current.children.length > 0) {
      // Obtenemos el ultimo elemento del slideShow.
      const index = slideShow.current.children.length - 1;
      const ultimoElemento = slideShow.current.children[index];
      slideShow.current.insertBefore(
        ultimoElemento,
        slideShow.current.firstChild
      );

      slideShow.current.style.transition = 'none';
      const tamañoSlide = slideShow.current.children[0].offsetWidth;
      slideShow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        slideShow.current.style.transition = `${velocity}ms ease-out all`;
        slideShow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect(() => {
    if (autoplay) {
      intervallideshow.current = setInterval(() => {
        next();
      }, interval);

      // Eliminamos los intervalos
      slideShow.current.addEventListener('mouseenter', () => {
        clearInterval(intervallideshow.current);
      });

      // Volvemos a poner el intervalo cuando saquen el cursor del slideShow
      slideShow.current.addEventListener('mouseleave', () => {
        intervallideshow.current = setInterval(() => {
          next();
        }, interval);
      });
    }
  }, [autoplay, interval, next]);

  return (
    <Box className='relative bg-sky-500'>
      <Box className='flex h-full w-full flex-nowrap' ref={slideShow}>
        {children}
      </Box>
      {controls && (
        <Box className='pointer-events-none absolute top-0 z-20 h-full w-full'>
          <Button>
            <AiOutlineArrowLeft
              className='fill-current text-white'
              onClick={previous}
            />
          </Button>
          <Button right>
            <AiOutlineArrowRight
              className='fill-current text-white'
              onClick={next}
            />
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Slider;
