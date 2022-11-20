import { RiAddLine } from 'react-icons/ri';

interface Props {
  name: string;
  description?: string;
}

const InfoGroup = ({ name, description }: Props) => {
  return (
    <div className='left-0 top-0 flex w-full items-center gap-8 border-b p-4 dark:border-gray-800 md:p-4'>
      <div>
        <img
          src='/img/logo3.png'
          className='h-14 w-14 rounded-full object-cover md:h-20 md:w-20'
        />
      </div>
      <div className='flex flex-1 flex-col items-center justify-between gap-2 md:flex-row'>
        <div>
          <h1 className='text-xl dark:text-gray-300 md:text-3xl'>{name}</h1>
          <p className='text-sm dark:text-gray-500 md:text-base'>
            {description}
          </p>
        </div>
        {/* Users */}
        {/* <div className='flex items-center gap-4'>
          <div className='flex items-start'>
            <img
              src='https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg'
              className='h-8 w-8 rounded-full object-cover'
            />
            <img
              src='https://img.freepik.com/foto-gratis/hermosa-mujer-mediana-edad-aspecto-amistoso-sonrisa-sincera-que-expresa-gratitud-siente-agradecida-muestra-su-corazon-lleno-amor-manteniendo-manos-pecho-sentimientos-humanos-genuinos-positivos_343059-2870.jpg'
              className='h-8 w-8 rounded-full object-cover'
            />
            <img
              src='https://img.freepik.com/foto-gratis/pareja-tiro-medio-pasar-tiempo-naturaleza_23-2149021649.jpg'
              className='h-8 w-8 rounded-full object-cover'
            />
          </div>
          <button className='rounded-full p-2.5 dark:bg-[#050505] dark:text-gray-300'>
            <RiAddLine />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default InfoGroup;
