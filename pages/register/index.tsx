import type { NextPage } from 'next';

import {
  RegisterContext,
  initialState,
  RegisterProvider,
} from 'views/RegisterPage/context';

import { GeneroService } from 'services/ema/V1/Genero';
import { SemestreService } from 'services/ema/V1/Semestre';
import { EspecialidadService } from 'services/ema/V1/Especialidad';

import { ICGenero, ICSemestre, ICEspecialidad } from 'interfaces/Entities';

import { RegisterPage, LayoutRegister } from 'views/RegisterPage';
import { TemaService, UAprendizajeService } from 'services';


interface Props {
  dataGenero: ICGenero[];
  dataSemestre: ICSemestre[];
  dataEspecialidad: ICEspecialidad[];
}

const App: NextPage = ({
  dataGenero,
  dataSemestre,
  dataEspecialidad,
}: Props) => {
  const valideteGen = dataGenero ? dataGenero : initialState.dataGenero;
  const valideteSem = dataSemestre ? dataSemestre : initialState.dataSemestre;
  const valideteEs = dataEspecialidad
    ? dataEspecialidad
    : initialState.dataEspecialidad;

  return (
    <RegisterContext.Provider
      value={{
        ...initialState,
        ...RegisterProvider(),
        dataGenero: valideteGen,
        dataSemestre: valideteSem,
        dataEspecialidad: valideteEs,
      }}
    >
      <LayoutRegister title='Register' description='Register EMA'>
        <RegisterPage />
      </LayoutRegister>
    </RegisterContext.Provider>
  );
};

export default App;

export async function getStaticProps() {
  const GeneroResponse = await GeneroService.getAll();
  const SemestreResponse = await SemestreService.getAll();
  const EspecialidadResponse = await EspecialidadService.getAll();


  return {
    props: {
      dataGenero: GeneroResponse.data,
      dataSemestre: SemestreResponse.data,
      dataEspecialidad: EspecialidadResponse.data,
    },
  };
}
