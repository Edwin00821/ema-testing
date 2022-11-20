import { Box } from '@mui/material';
import { Slider, Slide } from 'components/Slider';
import {useState} from 'react';
import {FiChevronRight, FiChevronLeft} from   'react-icons/fi'

// function Objectives() {
//   const myData =Box;
//   const [activeSlide, setActiveSlide] = useState(1);

//   const prevSliderHandler = (id) => {
//     if (id === 1){
//       setActiveSlide(myData.length)
//     }else if (id > 1){
//       setActiveSlide(activeSlide - 1)
//     }else{
//       setActiveSlide(myData.length - 1)
//     }
//   }

//   const nextSliderHandler = (id) => {
//     if (id === myData.length) {
//         setActiveSlide(1)
//     } else if (id < myData.length) {
//         setActiveSlide(activeSlide + 1);
//     }else {
//         setActiveSlide(myData.length - 1);
//     }
// }

// const Slider1 = (id) => {
//   if(id === myData.length){
//     setActiveSlide(1)
//   }else if (id < myData.length){
//     setActiveSlide(activeSlide + 1);
//   }else{
//     setActiveSlide(myData.length - 1);
//   }
//   }

//   return (
//     <Box id='objetivos' className='m-auto max-w-screen-lg py-32'>
//       <Box className='flex content-center justify-center'>
//         <h1 className='m-4 text-center text-3xl font-bold dark:text-white md:text-5xl lg:text-6xl xl:text-5xl  xl:leading-[4.5rem]'>
//           OBJETIVOS Y VALORES DEL PROYECTO
//         </h1>
//       </Box>
//       <Box className='mt-1 grid grid-cols-1 items-center justify-center md:px-8 lg:grid-cols-2'>
//         <Box className='flex items-center justify-center'>
//           <Box className='hidden items-center justify-center lg:flex'>
//             <img src='img/Objetivos.png' className='object-cover' />
//           </Box>
//         </Box>
//         <Slider controls={true}>
//           <Slide>
//           <div key={id} className={activeSlide === id ? 'flex justify-between items-center': 'hidden'}>
//                         <button className='text-6xl border-2 border-black' onClick={() => prevSliderHandler(id)}>
//                             <FivChevronLeft />
//                         </button>
//             <Box className='flex content-center justify-center '>
//               <a className='block h-1/2 max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
//                 <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
//                   OBJETIVOS:
//                 </h5>
//                 <p className='font-normal text-gray-700 dark:text-gray-400'>
//                   -Conservar los valores fundamentales de la empresa.
//                   <br />
//                   -Alcanzar mayor productividad.
//                   <br />
//                   -Implantarse en el mercado.
//                   <br />
//                   -Entrar al mercado con software innovador, con margen de éxito
//                   sostenible.
//                 </p>
//               </a>
//             </Box>
//           </Slide>
//           <Slide>
//             <Box className='flex content-center justify-center'>
//               <a className='block h-1/2 max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
//                 <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
//                   OBJETIVOS:
//                 </h5>
//                 <p className='font-normal text-gray-700 dark:text-gray-400'>
//                   -Sumar conocimientos nuevos para ser mejores programadores y
//                   personas.
//                   <br />
//                   -Formar estrategias que permitan la consecución de los
//                   objetivos definidos para llevarlos a cabo.
//                 </p>
//               </a>
//             </Box>
//           </Slide>
//           <Slide>
//             <Box className='flex content-center justify-center '>
//               <a className='block h-1/2 max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
//                 <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
//                   VALORES:
//                 </h5>
//                 <p className='font-normal text-gray-700 dark:text-gray-400'>
//                   +Responsabilidad
//                   <br />
//                   +Respeto
//                   <br />
//                   +Cargo de conciencia social
//                   <br />
//                   +Perfeccionamiento continúo
//                   <br />
//                   +Certeza

//                 </p>
//                 <button className='text-6xl border-2 border-black' onClick={() => nextSliderHandler(id)}>
//                   <FiChevronRight/>
//                 </button>
//               </a>
//             </Box>
//           </Slide>
//         </Slider>
//       </Box>
//     </Box>
//     );
// };
// export default Objectives;