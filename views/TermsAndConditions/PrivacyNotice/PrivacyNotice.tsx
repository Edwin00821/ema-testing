import { RiCheckboxBlankCircleFill, RiPlayFill } from 'react-icons/ri';
import { Box } from '@mui/material';

const PrivacyNotice = () => {
  return (
    <Box className='relative -mt-[5.75rem] overflow-hidden pt-[5.75rem]'>
        <Box className='px-4 sm:px-6 lg:px-8'>
            <Box className='relative mx-auto max-w-[37.5rem] pt-20 text-center pb-24'>
                <h1 className='text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl'> AVISO DE PRIVACIDAD </h1>
            </Box>
        </Box>
        <Box className='relative px-4 sm:px-6 lg:px-8'>
            <Box className='mx-auto max-w-[40rem] prose-sm prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600'>
                <p>
                AKDMy está comprometida con la protección de sus datos personales, al ser responsable de su utilización, manejo y confidencialidad mediante la continua revisión de nuestros procesos de amparo de datos de forma física como electrónica. 
                <br />
                ¿Para qué fines recabamos y utilizamos sus datos particulares? 
                <br />
                Sus datos personales serán utilizados para las finalidades necesarias del servicio de asistente virtual que usted solicitó: 
                <br />

                <ul className='list-disc px-8'>
                <br />
                <li> Administrar e intervenir el servicio de AKDMy, el cual usted ha requerido. </li>
                <br />
                </ul>
                De manera adicional, utilizaremos su información personal para las siguientes finalidades que no existen siendo necesarias para el servicio y/o producto solicitado y/o contratado, pero que nos permite ofrecerle un mejor cuidado: 
                <br />
                <br />
                <ul className='list-disc px-8'>
                <li> Comunicarle de nuevos desarrollos dentro de nuestra empresa. </li>
                <br />
                <li> Tener estadísticas sobre sus preferencias. </li> 
                <br />
                </ul>
                La negativa para el uso de sus datos personales para estas finalidades adicionales podrá ser móvil para que le sean negados los servicios y/o productos que solicita y/o pacta con nosotros. 
                <br />
                ¿Qué datos personales utilizaremos para estos fines y de dónde los obtendremos? 
                <br />
                Para las finalidades señaladas en el presente Aviso de Privacidad, podemos recabar sus datos particulares de distintas formas: cuando usted nos lo proporciona directamente o cuando alcanzamos información a través de otras fuentes que están consentidas por la Ley. 
                <br />
                Datos personales que recabamos de forma directa o de fuentes permitidas por la Ley. 

                <ul className='list-disc px-8'>
                    <br />
                    <li>Nombre completo</li>
                    <br />
                    <li> Edad </li>
                    <br />
                    <li> Número de boleta  </li>
                    <br />
                    <li> Correo electrónico </li>
                    <br />
                </ul>
                <br />
                <br />
                <h3 className='font-bold'> Derechos ARCO </h3>
                <br />
                Todos los Titulares de los datos personales poseen el derecho de Acceder, Rectificar y Cancelar su información personal que esté en posesión de terceros, así como Oponerse a su utilización. 
                <ul className='list-decimal px-8'>
                    <br />
                    <li>Acceso: Implica el derecho que tiene a acceder y conocer su información que está siendo asunto de tratamiento, así como el alcance y particularidades de dicho título. </li>
                    <br />
                    <li>Rectificación: Es el derecho que usted tiene a corregir sus datos particulares. </li>
                    <br />
                    <li>Cancelación: Es el derecho que le permite solicitar, en todo momento, la eliminación o esfumado de sus datos personales cuando considere que los mismos no están siendo empleados o manejados conforme a los principios, deberes y obligaciones prevenidas en la Ley. </li>
                    <br />
                    <li>Oposición: Consiste en solicitar el cese del tratamiento de sus datos particulares cuando una situación específica y personal así lo requiera para evitarle un daño o para fines formulados y concretos, por ejemplo, para fines de propaganda.  </li>
                <br />
                </ul>
                <br />
                <br />
                </p>
            </Box>
            <Box className='mx-auto w-full max-w-md py-8'>
                <button  className='w-4/12 cursor-pointer rounded-lg bg-secondary py-2 px-4 text-white transition-colors hover:bg-secondary-light'>
                    Regresar
                </button>
            </Box>
        </Box>
    </Box>
  );
};

export default PrivacyNotice;
