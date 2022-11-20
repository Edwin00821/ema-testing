import { Fragment, useContext, useEffect } from 'react';
import { ChatContext } from '../context';
import {
  EspecialidadService,
  SemestreService,
  ParcialService,
  UAprendizajeService,
  TemaService,
  SubtemaService,
  MaterialService,
  SemEspService,
} from 'services';
import { valideteMaterial } from 'libs/validateChat';
import { useSetMessage, useValidateQuery } from './';

const useConsultarMaterial = () => {
  const {
    optionChat,
    userMessage,
    query,
    firstId,
    setQuery,
    setLastMessage,
    setMaxOption,
    setMinOption,
    setFirstId,
    setSecondId,
  } = useContext(ChatContext);

  useEffect(() => {
    setLastMessage(userMessage);
    if (
      userMessage !== '' &&
      query === '' &&
      optionChat === '' &&
      !valideteMaterial(userMessage)
    ) {
      setTimeout(() => {
        useSetMessage([<p>Ups! no pude entender lo que dijiste</p>]);
        setLastMessage('Ups! no pude entender lo que dijiste');
      }, 1000);
    }

    if (
      optionChat === 'CONSULTAR MATERIAL' &&
      userMessage === 'CONSULTAR MATERIAL'
    ) {
      EspecialidadService.getAll().then(({ data }) => {
        setMinOption(data[0].id_es);
        setMaxOption(data[data.length - 1].id_es);
        setTimeout(() => {
          useSetMessage([
            data.map((esp) => (
              <Fragment key={esp.id_es}>
                {esp.id_es === 1 && (
                  <p>
                    Escoge la especialidad de la que quieras{' '}
                    {optionChat.toLowerCase()}
                  </p>
                )}
                <p className='px-5'>
                  {esp.id_es}.- {esp.nombre_es}
                </p>
              </Fragment>
            )),
          ] as React.ReactNode[]);
          setLastMessage('Escoge la especialidad de la que quieras');
          setQuery('ESPECIALIDAD');
        }, 1000);
      });
    }

    useValidateQuery(
      'CONSULTAR MATERIAL',
      'ESPECIALIDAD',
      'Porfavor escoge una especialidad válida',
      () => {
        setFirstId(Number(userMessage));
        SemestreService.getAll().then(({ data }) => {
          const filterSemestre = data.filter(({ id_sem }) =>
            Number(userMessage) === 1 ? id_sem < 3 : id_sem > 2
          );
          setMinOption(filterSemestre[0].id_sem);
          setMaxOption(filterSemestre[filterSemestre.length - 1].id_sem);
          useSetMessage([
            filterSemestre.map((sem) => (
              <Fragment key={sem.id_sem}>
                {(sem.id_sem === 3 || sem.id_sem === 1) && (
                  <p>
                    Escoge el semestre del que quieras{' '}
                    {optionChat.toLowerCase()}
                  </p>
                )}
                <p className='px-5'>
                  {sem.id_sem}.- {sem.tipo_sem}
                </p>
              </Fragment>
            )),
          ] as React.ReactNode[]);
          setLastMessage('Escoge la el semestre del que quiera');
          setQuery('SEMESTRE');
        });
      }
    );
    useValidateQuery(
      'CONSULTAR MATERIAL',
      'SEMESTRE',
      'Porfavor escoge un semestre válido',
      async () => {
        const SemEspEspecialidad = await SemEspService.searchBySemAndEsp(
          Number(userMessage),
          firstId
        );

        const SemEspTroncoComun = await SemEspService.searchBySemAndEsp(
          Number(userMessage),
          1
        );

        const UaEspecialidad = await UAprendizajeService.searchBySemEsp(
          Number(SemEspEspecialidad.data[0].id_semesp)
        );

        const UaTroncoComun = await UAprendizajeService.searchBySemEsp(
          Number(SemEspTroncoComun.data[0].id_semesp)
        );

        const uAprendizaje = [...UaTroncoComun.data, ...UaEspecialidad.data];
        setMinOption(1);
        setMaxOption(uAprendizaje.length + 1);
        useSetMessage([
          uAprendizaje.map((ua, index) => (
            <Fragment key={ua.id_ua}>
              {index === 0 && (
                <p>
                  Escoge la unidad de aprendizaje que quieras{' '}
                  {optionChat.toLowerCase()}
                </p>
              )}
              <p className='px-5'>
                {index + 1}.- {ua.nombre_ua}
              </p>
            </Fragment>
          )),
        ] as React.ReactNode[]);
        setQuery('UNIDAD DE APRENDIZAJE');
        setLastMessage('Escoge la unidad de aprendizaje que quiera');
      }
    );

    useValidateQuery(
      'CONSULTAR MATERIAL',
      'UNIDAD DE APRENDIZAJE',
      'Porfavor escoge una unidad de aprendizaje válida',
      () => {
        setSecondId(Number(userMessage));
        ParcialService.getAll().then(({ data }) => {
          setFirstId(Number(userMessage));
          setMinOption(data[0].id_par);
          setMaxOption(data[data.length - 1].id_par);
          useSetMessage([
            data.map((par) => (
              <Fragment key={par.id_par}>
                {par.id_par === 1 && (
                  <p>
                    Escoge el parcial del que quieras {optionChat.toLowerCase()}
                  </p>
                )}
                <p className='px-5'>
                  {par.id_par}.- {par.nombre_par}
                </p>
              </Fragment>
            )),
          ] as React.ReactNode[]);
          setQuery('PARCIAL');
          setLastMessage('Escoge el parcial deseado');
        });
        setQuery('PARCIAL');
        setLastMessage('Escoge el parcial del que quiera');
      }
    );

    useValidateQuery(
      'CONSULTAR MATERIAL',
      'PARCIAL',
      'Porfavor escoge un parcial válido',
      () => {
        TemaService.getAll().then(({ data }) => {
          useSetMessage([
            data.map((tema, index) => (
              <Fragment key={tema.id_tem}>
                {index === 0 && (
                  <p>
                    Escoge el tema del que quieras {optionChat.toLowerCase()}
                  </p>
                )}
                <p className='px-5'>
                  {index + 1}.- {tema.nombre_tem}
                </p>
              </Fragment>
            )),
          ] as React.ReactNode[]);
          setQuery('TEMA');
          setLastMessage('Escoge la unidad de aprendizaje que quiera');
        });
      }
    );

    useValidateQuery(
      'CONSULTAR MATERIAL',
      'TEMA',
      'Porfavor escoge un tema válido',
      () => {
        SubtemaService.getAll().then(({ data }) => {
          useSetMessage([
            data.map((subtema, index) => (
              <Fragment key={subtema.id_tem}>
                {index === 0 && (
                  <p>
                    Escoge el subtema del que quieras {optionChat.toLowerCase()}
                  </p>
                )}
                <p className='px-5'>
                  {index + 1}.- {subtema.nombre_sub}
                </p>
              </Fragment>
            )),
          ] as React.ReactNode[]);
          setQuery('SUBTEMA');
          setLastMessage('Escoge la unidad de aprendizaje que quiera');
        });
      }
    );

    useValidateQuery(
      'CONSULTAR MATERIAL',
      'SUBTEMA',
      'Porfavor escoge un subtema válido',
      () => {
        MaterialService.getAll().then(({ data }) => {
          useSetMessage([
            data.map((material, index) => (
              <Fragment key={material.id_mat}>
                {index === 0 && (
                  <p>
                    Escoge el material del que quieras{' '}
                    {optionChat.toLowerCase()}
                  </p>
                )}
                <p className='px-5'>
                  {index + 1}.- {material.url_mat}
                </p>
              </Fragment>
            )),
          ] as React.ReactNode[]);
          setQuery('SUBTEMA');
          setLastMessage('Escoge la unidad de aprendizaje que quiera');
        });
      }
    );
  }, [userMessage]);
};

export default useConsultarMaterial;
