import { useState, useContext, useEffect } from 'react';
import type { Dispatch, SetStateAction } from 'react';

import { RegisterContext } from 'views/RegisterPage/context';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { FaArrowLeft } from 'react-icons/fa';

import { Input, Select } from 'components/Forms';

import { SchemaRegisterAcademic } from 'utils/schemas';

import { IRegisterStudent } from 'interfaces/Auth';

import useSemestre from 'hooks/useSemestre';
import useEspecialidad from 'hooks/useEspecialidad';

import { UsuarioService } from 'services/ema/V1/Usuario';

import { ToastContainer, toast, toastConfig, toastContainerConfig } from 'libs';

import { EstudianteService } from 'services/ema/V1';
import Loader from 'components/Loader';

const AcademicDataForm = () => {
  const { dataSemestre, dataEspecialidad, setIndexActive, setAcademicData } =
    useContext(RegisterContext);

  const { optionsSemestre, selectedSemestre, setSelectedSemestre } =
    useSemestre(dataSemestre);

  const {
    optionsEspecialidad,
    selectedEspecialidad,
    defaultEspecialidad,
    setSelectedEspecialidad,
  } = useEspecialidad(dataEspecialidad);

  const [loading, setLoading] = useState(false);

  const filterEspecialidad = !selectedSemestre.value
    ? [{ name: 'Primero debes escoger tu semestre', value: null }]
    : selectedSemestre.value <= 2 
    ? optionsEspecialidad.filter(({ value }) => value <= 1)
    : optionsEspecialidad.filter(({ value }) => value > 1);
  useEffect(() => {
    setSelectedEspecialidad(defaultEspecialidad);
  }, [selectedSemestre]);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<IRegisterStudent>({
    resolver: yupResolver(SchemaRegisterAcademic),
  });

  const watchBoleta = watch('boleta_est');
  const watchEmail = watch('correo_user');
  const watchPassword = watch('password_user');
  const watchConfirmPassword = watch('confirmPassword');

  const onSubmit = async (data: IRegisterStudent) => {
    const { boleta_est, correo_user } = data;
    const id = toast.loading('Validando datos...', {
      position: 'top-right',
      autoClose: 2000,
      theme: 'light',
      ...toastConfig,
    });
    setLoading(true);
    const StudentResponse = await EstudianteService.searchByBoleta(boleta_est);
    const UserResponse = await UsuarioService.searchByEmail(correo_user);
    setLoading(false);

    if (Array.isArray(StudentResponse)) {
      console.log('Ya existe un estudiante con esa boleta');
      toast.update(id, {
        render: 'Ya existe un estudiante con esa boleta',
        type: 'error',
        isLoading: false,
        autoClose: 4000,
        theme: 'light',
        ...toastConfig,
      });
    }

    if (Array.isArray(UserResponse)) {
      console.log('Ya existe un usuario con ese correo');
      toast.update(id, {
        render: 'Ya existe un usuario con ese correo',
        type: 'error',
        isLoading: false,
        autoClose: 4000,
        theme: 'light',
        ...toastConfig,
      });
    }

    if (!Array.isArray(StudentResponse) && !Array.isArray(UserResponse)) {
      toast.update(id, {
        render: 'Datos correctos',
        type: 'success',
        isLoading: false,
        autoClose: 500,
        theme: 'light',
        ...toastConfig,
      });

      setAcademicData(data);
    }
  };

  return (
    <form
      className='flex flex-col items-center'
      onSubmit={handleSubmit(onSubmit)}
    >
      <ToastContainer
        position='top-right'
        autoClose={5000}
        theme='light'
        {...toastContainerConfig}
      />
      <div className='grid grid-cols-2 items-center justify-items-center gap-y-3 gap-x-10 '>
        <div className='relative w-96'>
          <Input
            type='text'
            value={watchBoleta}
            placeholder='Boleta'
            register={{ ...register('boleta_est') }}
            errors={errors.boleta_est}
          />
        </div>
        <div className='relative w-96'>
          <Controller
            control={control}
            name='id_sem'
            render={({ field: { onChange } }) => (
              <Select
                name='id_sem'
                placeholder='Escoge un semestre'
                options={optionsSemestre}
                selected={selectedSemestre}
                setSelected={setSelectedSemestre}
                onChange={onChange}
                errors={errors.id_sem}
              />
            )}
          />
        </div>
        <div className='relative w-96'>
          <Controller
            control={control}
            name='id_es'
            render={({ field: { onChange } }) => (
              <Select
                name='id_es'
                placeholder='Escoge una especialidad'
                options={filterEspecialidad}
                selected={selectedEspecialidad}
                setSelected={setSelectedEspecialidad}
                onChange={onChange}
                errors={errors.id_es}
              />
            )}
          />
        </div>
        <div className='relative w-96'>
          <Input
            type='text'
            value={watchEmail}
            placeholder='Correo electrónico'
            register={{ ...register('correo_user') }}
            errors={errors.correo_user}
          />
        </div>
        <div className='relative w-96'>
          <Input
            type='text'
            value={watchPassword}
            placeholder='Contraseña'
            register={{ ...register('password_user') }}
            errors={errors.password_user}
          />
        </div>
        <div className='relative w-96'>
          <Input
            type='text'
            value={watchConfirmPassword}
            placeholder='Confirmar contraseña'
            register={{ ...register('confirmPassword') }}
            errors={errors.confirmPassword}
          />
        </div>
        <div className='flex items-center gap-2'>
          <input type='checkbox' {...register('check')} />
          <label htmlFor='remember'>Acepar terminos y condiciones</label>
        </div>
      </div>
      <div className='mt-10 flex gap-5 '>
        <div className='relative'>
          <button
            type='button'
            className='mr-3 flex w-full items-center justify-between rounded-lg bg-secondary py-2 px-11 font-bold text-white shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:ring-opacity-50
            hover:bg-secondary/70 hover:shadow-secondary/50'
            onClick={() => setIndexActive(1)}
          >
            <FaArrowLeft size={16} className='text-white' />
            VOLVER
          </button>
        </div>
        <div className='relative'>
          <button
            type='submit'
            className='rounded-lg bg-secondary py-2 px-8 font-bold text-white shadow-lg transition-colors focus:outline-none focus:ring-2
            focus:ring-secondary/50 focus:ring-opacity-50 hover:bg-secondary/70 hover:shadow-secondary/50'
          >
            {!loading ? 'CREAR CUENTA' : <Loader />}
          </button>
        </div>
      </div>
    </form>
  );
};

export default AcademicDataForm;
