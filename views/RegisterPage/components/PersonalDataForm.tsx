import { useContext, useState } from 'react';

import type { IPersonalData } from 'interfaces/Auth';
import type { Dispatch, SetStateAction } from 'react';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { RegisterContext } from 'views/RegisterPage/context';

import { SchemaRegisterPersonal } from 'utils/schemas';

import { Input } from 'components/Forms';
import Select from 'components/Forms/Select';

import { FaArrowRight } from 'react-icons/fa';
import useGenero from 'hooks/useGenero';

import { PersonaService } from 'services/ema/V1/Persona';

import { ToastContainer, toast, toastConfig, toastContainerConfig } from 'libs';

import Loader from 'components/Loader';

const PersonalDataForm = () => {
  const [loading, setLoading] = useState(false);
  const { dataGenero, setPersonalData, setIndexActive } =
    useContext(RegisterContext);
  const { optionsGenero, selectedGenero, setSelectedGenero } =
    useGenero(dataGenero);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<IPersonalData>({
    resolver: yupResolver(SchemaRegisterPersonal),
  });

  const watchName = watch('nombre_per');
  const watchAppat = watch('appat_per');
  const watchApmat = watch('apmat_per');
  const watchBirthday = watch('fecha_de_nacimiento_per');

  const onSubmit = async (data: IPersonalData) => {
    const { appat_per, apmat_per } = data;
    const id = toast.loading('Validando datos...', {
      autoClose: 2000,
      theme: 'light',
      position: 'top-right',
      ...toastConfig,
    });
    setLoading(true);
    const PersonaResponse = await PersonaService.searchByAppatAndApmat(
      appat_per,
      apmat_per
    );
    setLoading(false);
    if (!PersonaResponse.data) {
      toast.update(id, {
        render: 'Ya existe una persona con esas credenciales',
        type: 'error',
        isLoading: false,
        autoClose: 2000,
        theme: 'light',
        ...toastConfig,
      });
    }
    if (PersonaResponse.data) {
      toast.update(id, {
        render: 'Informacion personal correcta',
        type: 'success',
        isLoading: false,
        autoClose: 500,
        theme: 'light',
        ...toastConfig,
      });
      setPersonalData(data);
      setIndexActive(2);
    }
  };

  return (
    <form
      className='flex flex-col items-center gap-10 '
      onSubmit={handleSubmit(onSubmit)}
    >
      <ToastContainer
        position='top-right'
        autoClose={5000}
        theme='light'
        {...toastContainerConfig}
      />
      <div className='grid w-5/6 grid-cols-1 items-center justify-items-center gap-x-10 gap-y-5 md:w-4/6 md:grid-cols-2 '>
        <Input
          type='text'
          value={watchName}
          placeholder='Nombre(s)'
          register={{ ...register('nombre_per') }}
          errors={errors.nombre_per}
        />
        <Input
          value={watchAppat}
          type='text'
          placeholder='Apellido Paterno'
          register={{ ...register('appat_per') }}
          errors={errors.appat_per}
        />
        <Input
          value={watchApmat}
          type='text'
          placeholder='Apellido Materno'
          register={{ ...register('apmat_per') }}
          errors={errors.apmat_per}
        />
        <Input
          type='date'
          value={watchBirthday}
          placeholder='Fecha de Nacimiento'
          register={{ ...register('fecha_de_nacimiento_per') }}
          errors={errors.fecha_de_nacimiento_per}
        />
        <Controller
          control={control}
          name='id_gen'
          render={({ field: { onChange } }) => (
            <Select
              name='id_gen'
              placeholder='Escoge un género'
              options={optionsGenero}
              selected={selectedGenero}
              setSelected={setSelectedGenero}
              onChange={onChange}
              errors={errors.id_gen}
            />
          )}
        />
      </div>
      <div className='relative flex'>
        <button
          type='submit'
          disabled={loading}
          className={`mr-3 flex w-full ${
            loading ? 'cursor-not-allowed' : 'cursor-pointer'
          } items-center justify-between rounded-lg bg-secondary py-2 px-8 font-bold text-white shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-light focus:ring-opacity-50 hover:bg-secondary-dark hover:shadow-secondary-dark`}
        >
          {!loading ? (
            <>
              SIGUIENTE
              <FaArrowRight size={16} className='text-white' />
            </>
          ) : (
            <Loader />
          )}
        </button>
      </div>
    </form>
  );
};

export default PersonalDataForm;
