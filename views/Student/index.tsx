import { Fragment, useEffect, useState, useRef } from 'react';
import { RiMessage2Line } from 'react-icons/ri';

import { valideteMaterial } from 'libs/validateChat';

import {
  User,
  InfoGroup,
  SendMessage,
  Divider,
  MessageUser,
  SearchChats,
  Message,
} from 'views/Chat/components';

import { EspecialidadService } from 'services/ema/V1/Especialidad';
import { SemestreService } from 'services/ema/V1/Semestre';
import { ParcialService } from 'services/ema/V1/Parcial';
import { UAprendizajeService } from 'services/ema/V1/UAprendizaje';
import { TemaService } from 'services/ema/V1/Tema';
import { SubtemaService } from 'services/ema/V1/Subtema';
import { MaterialService } from 'services/ema/V1/Material';
import { SemEspService } from 'services/ema/V1/SemEsp';

interface chat {
  name: string;
  src: string;
  messages: React.ReactNode[];
  main: boolean;
}

const InitialChat: chat[] = [
  {
    name: 'EMA',
    src: '/img/logo3.png',
    messages: ['Hola, Bienvenido a EMA', '¿En que te puedo ayudar?'],
    main: false,
  },
];

function App() {
  const chatRef = useRef<HTMLDivElement>(null);

  const [chats, setChats] = useState<chat[]>(InitialChat);

  const [userMessage, setUserMessage] = useState('');
  const [optionChat, setOptionChat] = useState('');
  const [query, setQuery] = useState('');

  const [minOption, setMinOption] = useState(0);
  const [maxOption, setMaxOption] = useState(0);

  const [firstId, setFirstId] = useState(0);
  const [secondId, setSecondId] = useState(0);

  const [lastMessage, setLastMessage] = useState('¿En que te puedo ayudar?');

  const setMessage = (messages: React.ReactNode[]) => {
    setUserMessage('');
    setTimeout(() => {
      setChats((prev) => [
        ...prev,
        {
          name: 'EMA',
          src: '/img/logo3.png',
          messages,
          main: false,
        },
      ]);
    }, 1000);
  };
  const validateQueryError = (
    validOptionChat: string,
    validQuery: string,
    message: string
  ) => {
    if (
      optionChat === validOptionChat &&
      query === validQuery &&
      userMessage !== '' &&
      (!Number(userMessage) ||
        Number(userMessage) < minOption ||
        Number(userMessage) > maxOption)
    ) {
      setMessage([<p>{message}</p>]);
      setLastMessage(message);
    }
  };

  const validateQuerySuccess = (
    validOptionChat: string,
    validQuery: string,
    callback: () => void
  ) => {
    if (
      optionChat === validOptionChat &&
      query === validQuery &&
      Number(userMessage) >= minOption &&
      Number(userMessage) <= maxOption
    ) {
      callback();
    }
  };

  const validateQuery = (
    validOptionChat: string,
    validQuery: string,
    message: string,
    callback: () => void
  ) => {
    validateQueryError(validOptionChat, validQuery, message);
    validateQuerySuccess(validOptionChat, validQuery, callback);
  };

  const validateDataError = (data: unknown, callback: () => void) => {
    if (data === null) {
      setMessage([<p>Lo siento, no se encontro ningun resultado</p>]);
      cancelQuery();
    }
    if (data !== null) {
      callback();
    }
  };

  const cancelQuery = () => {
    setOptionChat('');
    setQuery('');
    setMinOption(0);
    setMaxOption(0);
    setFirstId(0);
    setSecondId(0);
    setMessage([<p>¿En que te puedo ayudar?</p>]);
  };

  useEffect(() => {
    setLastMessage(userMessage);
    if (
      userMessage !== '' &&
      query === '' &&
      optionChat === '' &&
      !valideteMaterial(userMessage)
    ) {
      setTimeout(() => {
        setMessage([<p>Ups! no pude entender lo que dijiste</p>]);
        setLastMessage('Ups! no pude entender lo que dijiste');
      }, 1000);
    }

    if (
      optionChat === 'CONSULTAR MATERIAL' &&
      userMessage === 'CONSULTAR MATERIAL' &&
      query === ''
    ) {
      EspecialidadService.getAll().then(({ data }) => {
        validateDataError(data, () => {
          const FirstOption = data[0].id_es;
          setMinOption(1);
          setMaxOption(data.length + 1);
          setMessage([
            data.map((esp) => (
              <Fragment key={`EspecialidadService.getAll_${esp.id_es}`}>
                {esp.id_es === FirstOption && (
                  <p>
                    Escoge la especialidad de la que quieras{' '}
                    {optionChat.toLowerCase()}
                  </p>
                )}
                <p className='w-full truncate px-5 hover:text-clip hover:whitespace-normal'>
                  {esp.id_es}.- {esp.nombre_es}
                </p>
              </Fragment>
            )),
          ] as React.ReactNode[]);
          setLastMessage('Escoge la especialidad de la que quieras');
          setQuery('ESPECIALIDAD');
        });
      });
    }

    validateQuery(
      'CONSULTAR MATERIAL',
      'ESPECIALIDAD',
      'Porfavor escoge una especialidad válida',
      () => {
        setFirstId(Number(userMessage));
        SemestreService.getAll().then(({ data }) => {
          validateDataError(data, () => {
            const filterSemestre = data.filter(({ id_sem }) =>
              Number(userMessage) === 1 ? id_sem < 3 : id_sem > 2
            );
            const FirstOption = filterSemestre[0].id_sem;
            setMinOption(filterSemestre[0].id_sem);
            setMaxOption(filterSemestre[filterSemestre.length - 1].id_sem);
            setMessage([
              filterSemestre.map((sem) => (
                <Fragment key={sem.id_sem}>
                  {sem.id_sem === FirstOption && (
                    <p>
                      Escoge el semestre del que quieras{' '}
                      {optionChat.toLowerCase()}
                    </p>
                  )}
                  <p className='w-full truncate px-5 hover:text-clip hover:whitespace-normal'>
                    {sem.id_sem}.- {sem.tipo_sem}
                  </p>
                </Fragment>
              )),
            ] as React.ReactNode[]);
            setLastMessage('Escoge la el semestre del que quiera');
            setQuery('SEMESTRE');
          });
        });
      }
    );
    validateQuery(
      'CONSULTAR MATERIAL',
      'SEMESTRE',
      'Porfavor escoge un semestre válido',

      async () => {
        const SemEspEspecialidad = await SemEspService.searchBySemAndEsp(
          Number(userMessage),
          firstId
        );

        validateDataError(SemEspEspecialidad.data, async () => {
          const SemEspTroncoComun = await SemEspService.searchBySemAndEsp(
            Number(userMessage),
            1
          );
          validateDataError(SemEspTroncoComun.data, async () => {
            const UaEspecialidad = await UAprendizajeService.searchBySemEsp(
              Number(SemEspEspecialidad.data[0]?.id_semesp)
            );
            validateDataError(UaEspecialidad, async () => {
              const UaTroncoComun = await UAprendizajeService.searchBySemEsp(
                Number(SemEspTroncoComun.data[0]?.id_semesp)
              );
              validateDataError(UaTroncoComun.data, () => {
                const uAprendizaje = [
                  ...UaTroncoComun.data,
                  ...UaEspecialidad.data,
                ];
                const FirstOption = uAprendizaje[0].id_ua;
                setMinOption(1);
                setMaxOption(uAprendizaje.length + 1);
                setMessage([
                  uAprendizaje.map((ua) => (
                    <Fragment key={ua.id_ua}>
                      {ua.id_ua === FirstOption && (
                        <p>
                          Escoge la unidad de aprendizaje que quieras{' '}
                          {optionChat.toLowerCase()}
                        </p>
                      )}
                      <p className='w-full truncate px-5 hover:text-clip hover:whitespace-normal'>
                        {ua.id_ua}.- {ua.nombre_ua}
                      </p>
                    </Fragment>
                  )),
                ] as React.ReactNode[]);
                setLastMessage('Escoge la unidad de aprendizaje que quiera');
                setQuery('UNIDAD DE APRENDIZAJE');
              });
            });
          });
        });
      }
    );

    validateQuery(
      'CONSULTAR MATERIAL',
      'UNIDAD DE APRENDIZAJE',
      'Porfavor escoge una unidad de aprendizaje válida',
      () => {
        setFirstId(Number(userMessage));
        ParcialService.getAll().then(({ data }) => {
          validateDataError(data, () => {
            const FirstOption = data[0].id_par;
            setFirstId(Number(userMessage));
            setMinOption(data[0]?.id_par);
            setMaxOption(data[data.length - 1].id_par);
            setMessage([
              data.map((par) => (
                <Fragment key={par.id_par}>
                  {par.id_par === FirstOption && (
                    <p>
                      Escoge el parcial del que quieras{' '}
                      {optionChat.toLowerCase()}
                    </p>
                  )}
                  <p className='w-full truncate px-5 hover:text-clip hover:whitespace-normal'>
                    {par.id_par}.- {par.nombre_par}
                  </p>
                </Fragment>
              )),
            ] as React.ReactNode[]);
            setLastMessage('Escoge el parcial deseado');
            setQuery('PARCIAL');
          });
        });
      }
    );
    validateQuery(
      'CONSULTAR MATERIAL',
      'PARCIAL',
      'Porfavor escoge un parcial válido',
      () => {
        TemaService.searchByParAndUa(Number(userMessage), firstId).then(
          ({ data }) => {
            validateDataError(data, () => {
              const FirstOption = data[0].id_tem;
              setMessage([
                data.map((tema) => (
                  <Fragment key={tema.id_tem}>
                    {tema.id_tem === FirstOption && (
                      <p>
                        Escoge el tema del que quieras{' '}
                        {optionChat.toLowerCase()}
                      </p>
                    )}
                    <p className='w-full truncate px-5 hover:text-clip hover:whitespace-normal'>
                      {tema.id_tem}.- {tema.nombre_tem}
                    </p>
                  </Fragment>
                )),
              ] as React.ReactNode[]);
              setLastMessage('Escoge la unidad de aprendizaje que quiera');
              setQuery('TEMA');
            });
          }
        );
      }
    );

    validateQuery(
      'CONSULTAR MATERIAL',
      'TEMA',
      'Porfavor escoge un tema válido',
      () => {
        SubtemaService.searchByTema(Number(userMessage)).then(({ data }) => {
          validateDataError(data, () => {
            setMessage([
              data.map((subtema) => (
                <Fragment key={subtema.id_sub}>
                  {subtema.id_sub === 0 && (
                    <p>
                      Escoge el subtema del que quieras{' '}
                      {optionChat.toLowerCase()}
                    </p>
                  )}
                  <p className='w-full truncate px-5 hover:text-clip hover:whitespace-normal'>
                    {subtema.id_sub}.- {subtema.nombre_sub}
                  </p>
                </Fragment>
              )),
            ] as React.ReactNode[]);
            setLastMessage('Escoge la unidad de aprendizaje que quiera');
            setQuery('SUBTEMA');
          });
        });
      }
    );

    validateQuery(
      'CONSULTAR MATERIAL',
      'SUBTEMA',
      'Porfavor escoge un subtema válido',
      () => {
        MaterialService.searchBySubtema(Number(userMessage)).then(
          ({ data }) => {
            validateDataError(data, () => {
              const FirstOption = data[0].id_mat;
              setMessage([
                data.map((material) => (
                  <Fragment key={material.id_mat}>
                    {material.id_mat === FirstOption && (
                      <p>
                        Escoge el material del que quieras{' '}
                        {optionChat.toLowerCase()}
                      </p>
                    )}
                    <a
                      className='inline-block w-full truncate px-5 underline underline-offset-4 hover:text-clip hover:whitespace-normal '
                      href={material.url_mat}
                    >
                      {material.id_mat}.- {material.url_mat}
                    </a>
                  </Fragment>
                )),
              ] as React.ReactNode[]);
              setLastMessage('Escoge la unidad de aprendizaje que quiera');
              setQuery('SUBTEMA');
            });
          }
        );
      }
    );
  }, [userMessage]);

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chats]);

  return (
    <main className='flex  h-screen grid-cols-1 bg-white pr-2 pt-20 dark:bg-[#22222A] lg:grid-cols-2'>
      <section className={` hidden transition-all md:block md:w-[25%] `}>
        <SearchChats />
        <div className='h-[66vh] w-full overflow-y-scroll py-5 scrollbar-default scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 scrollbar-track-rounded-full scrollbar-thumb-rounded-full dark:scrollbar-thumb-gray-700 md:pr-10 md:pl-6'>
          <User
            name='EMA'
            active={true}
            img='/img/logo3.png'
            lastMessage={lastMessage}
            isTyping={false}
            time='4:30 PM'
            unreadMessage={1}
          />
          <h5 className='my-8 flex items-center gap-2 dark:text-gray-300'>
            <RiMessage2Line /> All messages
          </h5>
        </div>
      </section>

      <section className='flex h-[89vh] w-[75%] flex-col bg-gray-50 dark:bg-[#1E1F24]'>
        <InfoGroup name='Educational Material Assistant' />

        <div className='h-full overflow-y-scroll py-5 px-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-700 scrollbar-track-rounded-full scrollbar-thumb-rounded-full '>
          <Divider />
          {chats.map(({ name, src, messages, main }, index) => (
            <MessageUser name={name} src={src} key={index} main={main}>
              {messages.map((message, index) => (
                <Message key={index} main={main}>
                  {message}
                </Message>
              ))}
            </MessageUser>
          ))}
          <div ref={chatRef} />
        </div>
        <SendMessage
          setChats={setChats}
          setUserMessage={setUserMessage}
          setQuery={setQuery}
          setLastQuery={setOptionChat}
        />
      </section>
    </main>
  );
}

export default App;
