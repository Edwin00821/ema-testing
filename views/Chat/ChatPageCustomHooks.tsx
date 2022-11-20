import { ChatContext, chat } from '.';
import { Fragment, useEffect, useRef, useContext } from 'react';
import { RiMessage2Line } from 'react-icons/ri';

import {
  User,
  InfoGroup,
  SendMessage,
  Divider,
  MessageUser,
  SearchChats,
  Message,
} from 'views/Chat/components';

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
import { valideteMaterial } from 'libs';
import { useConsultarMaterial } from './hooks';

const InitialChat: chat[] = [
  {
    name: 'EMA',
    src: '/img/logo3.png',
    messages: ['Hola, Bienvenido a EMA', '¿En que te puedo ayudar?'],
    main: false,
  },
];

const ChatPage = () => {
  const chatRef = useRef<HTMLDivElement>(null);
  const {
    messagesChat,
    // userMessage,
    // optionChat,
    // query,
    lastMessage,
    // minOption,
    // maxOption,
    // firstId,
    // secondId,
    setMessagesChat,
    setUserMessage,
    setOptionChat,
    setQuery,
    // setLastMessage,
    // setMinOption,
    // setMaxOption,
    // setFirstId,
    // setSecondId,
  } = useContext(ChatContext);

  useConsultarMaterial();

  // const setMessage = (messages: React.ReactNode[]) => {
  //   setMessagesChat([
  //     ...messagesChat,
  //     {
  //       name: 'EMA',
  //       src: '/img/logo3.png',
  //       messages,
  //       main: false,
  //     },
  //   ]);
  // };

  // const validateQueryError = (
  //   validOptionChat: string,
  //   validQuery: string,
  //   message: string
  // ) => {
  //   if (
  //     optionChat === validOptionChat &&
  //     query === validQuery &&
  //     (!Number(userMessage) ||
  //       Number(userMessage) < minOption ||
  //       Number(userMessage) > maxOption)
  //   ) {
  //     setMessage([<p>{message}</p>]);
  //     setLastMessage(message);
  //   }
  // };

  // const validateQuerySuccess = (
  //   validOptionChat: string,
  //   validQuery: string,
  //   callback: () => void
  // ) => {
  //   if (
  //     optionChat === validOptionChat &&
  //     query === validQuery &&
  //     Number(userMessage) >= minOption &&
  //     Number(userMessage) <= maxOption
  //   ) {
  //     callback();
  //   }
  // };

  // const validateQuery = (
  //   validOptionChat: string,
  //   validQuery: string,
  //   message: string,
  //   callback: () => void
  // ) => {
  //   validateQueryError(validOptionChat, validQuery, message);
  //   validateQuerySuccess(validOptionChat, validQuery, callback);
  // };

  // const validateDataError = () => {};

  // const cancelQuery = () => {
  //   setOptionChat('');
  //   setQuery('');
  //   setMinOption(0);
  //   setMaxOption(0);
  //   setFirstId(0);
  //   setSecondId(0);
  //   setMessagesChat([...messagesChat, ...InitialChat]);
  // };

  useEffect(() => {
    setMessagesChat(InitialChat);
  }, []);

  // useEffect(() => {
  //   setLastMessage(userMessage);
  //   if (
  //     userMessage !== '' &&
  //     query === '' &&
  //     optionChat === '' &&
  //     !valideteMaterial(userMessage)
  //   ) {
  //     setTimeout(() => {
  //       setMessage([<p>Ups! no pude entender lo que dijiste</p>]);
  //       setLastMessage('Ups! no pude entender lo que dijiste');
  //     }, 1000);
  //   }

  //   if (
  //     optionChat === 'CONSULTAR MATERIAL' &&
  //     userMessage === 'CONSULTAR MATERIAL'
  //   ) {
  //     EspecialidadService.getAll().then(({ data }) => {
  //       setMinOption(data[0]?.id_es);
  //       setMaxOption(data[data.length - 1].id_es);
  //       setTimeout(() => {
  //         setMessage([
  //           data.map((esp) => (
  //             <Fragment key={esp.id_es}>
  //               {esp.id_es === 1 && (
  //                 <p>
  //                   Escoge la especialidad de la que quieras{' '}
  //                   {optionChat.toLowerCase()}
  //                 </p>
  //               )}
  //               <p className='px-5'>
  //                 {esp.id_es}.- {esp.nombre_es}
  //               </p>
  //             </Fragment>
  //           )),
  //         ] as React.ReactNode[]);
  //         setLastMessage('Escoge la especialidad de la que quieras');
  //         setQuery('ESPECIALIDAD');
  //       }, 1000);
  //     });
  //   }

  //   validateQuery(
  //     'CONSULTAR MATERIAL',
  //     'ESPECIALIDAD',
  //     'Porfavor escoge una especialidad válida',
  //     () => {
  //       setFirstId(Number(userMessage));
  //       SemestreService.getAll().then(({ data }) => {
  //         const filterSemestre = data.filter(({ id_sem }) =>
  //           Number(userMessage) === 1 ? id_sem < 3 : id_sem > 2
  //         );
  //         setMinOption(filterSemestre[0].id_sem);
  //         setMaxOption(filterSemestre[filterSemestre.length - 1].id_sem);
  //         setMessage([
  //           filterSemestre.map((sem) => (
  //             <Fragment key={sem.id_sem}>
  //               {(sem.id_sem === 3 || sem.id_sem === 1) && (
  //                 <p>
  //                   Escoge el semestre del que quieras{' '}
  //                   {optionChat.toLowerCase()}
  //                 </p>
  //               )}
  //               <p className='px-5'>
  //                 {sem.id_sem}.- {sem.tipo_sem}
  //               </p>
  //             </Fragment>
  //           )),
  //         ] as React.ReactNode[]);
  //         setLastMessage('Escoge la el semestre del que quiera');
  //         setQuery('SEMESTRE');
  //       });
  //     }
  //   );
  //   validateQuery(
  //     'CONSULTAR MATERIAL',
  //     'SEMESTRE',
  //     'Porfavor escoge un semestre válido',
  //     async () => {
  //       const SemEspEspecialidad = await SemEspService.searchBySemAndEsp(
  //         Number(userMessage),
  //         firstId
  //       );

  //       const SemEspTroncoComun = await SemEspService.searchBySemAndEsp(
  //         Number(userMessage),
  //         1
  //       );

  //       const UaEspecialidad = await UAprendizajeService.searchBySemEsp(
  //         Number(SemEspEspecialidad.data[0]?.id_semesp)
  //       );

  //       const UaTroncoComun = await UAprendizajeService.searchBySemEsp(
  //         Number(SemEspTroncoComun.data[0]?.id_semesp)
  //       );

  //       const uAprendizaje = [...UaTroncoComun.data, ...UaEspecialidad.data];
  //       setMinOption(1);
  //       setMaxOption(uAprendizaje.length + 1);
  //       setMessage([
  //         uAprendizaje.map((ua, index) => (
  //           <Fragment key={ua.id_ua}>
  //             {index === 0 && (
  //               <p>
  //                 Escoge la unidad de aprendizaje que quieras{' '}
  //                 {optionChat.toLowerCase()}
  //               </p>
  //             )}
  //             <p className='px-5'>
  //               {index + 1}.- {ua.nombre_ua}
  //             </p>
  //           </Fragment>
  //         )),
  //       ] as React.ReactNode[]);
  //       setQuery('UNIDAD DE APRENDIZAJE');
  //       setLastMessage('Escoge la unidad de aprendizaje que quiera');
  //     }
  //   );

  //   validateQuery(
  //     'CONSULTAR MATERIAL',
  //     'UNIDAD DE APRENDIZAJE',
  //     'Porfavor escoge una unidad de aprendizaje válida',
  //     () => {
  //       setSecondId(Number(userMessage));
  //       ParcialService.getAll().then(({ data }) => {
  //         setFirstId(Number(userMessage));
  //         setMinOption(data[0]?.id_par);
  //         setMaxOption(data[data.length - 1].id_par);
  //         setMessage([
  //           data.map((par) => (
  //             <Fragment key={par.id_par}>
  //               {par.id_par === 1 && (
  //                 <p>
  //                   Escoge el parcial del que quieras {optionChat.toLowerCase()}
  //                 </p>
  //               )}
  //               <p className='px-5'>
  //                 {par.id_par}.- {par.nombre_par}
  //               </p>
  //             </Fragment>
  //           )),
  //         ] as React.ReactNode[]);
  //         setQuery('PARCIAL');
  //         setLastMessage('Escoge el parcial deseado');
  //       });
  //       setQuery('PARCIAL');
  //       setLastMessage('Escoge el parcial del que quiera');
  //     }
  //   );

  //   validateQuery(
  //     'CONSULTAR MATERIAL',
  //     'PARCIAL',
  //     'Porfavor escoge un parcial válido',
  //     () => {
  //       TemaService.getAll().then(({ data }) => {
  //         setMessage([
  //           data.map((tema, index) => (
  //             <Fragment key={tema.id_tem}>
  //               {index === 0 && (
  //                 <p>
  //                   Escoge el tema del que quieras {optionChat.toLowerCase()}
  //                 </p>
  //               )}
  //               <p className='px-5'>
  //                 {index + 1}.- {tema.nombre_tem}
  //               </p>
  //             </Fragment>
  //           )),
  //         ] as React.ReactNode[]);
  //         setQuery('TEMA');
  //         setLastMessage('Escoge la unidad de aprendizaje que quiera');
  //       });
  //     }
  //   );

  //   validateQuery(
  //     'CONSULTAR MATERIAL',
  //     'TEMA',
  //     'Porfavor escoge un tema válido',
  //     () => {
  //       SubtemaService.getAll().then(({ data }) => {
  //         setMessage([
  //           data.map((subtema, index) => (
  //             <Fragment key={subtema.id_tem}>
  //               {index === 0 && (
  //                 <p>
  //                   Escoge el subtema del que quieras {optionChat.toLowerCase()}
  //                 </p>
  //               )}
  //               <p className='px-5'>
  //                 {index + 1}.- {subtema.nombre_sub}
  //               </p>
  //             </Fragment>
  //           )),
  //         ] as React.ReactNode[]);
  //         setQuery('SUBTEMA');
  //         setLastMessage('Escoge la unidad de aprendizaje que quiera');
  //       });
  //     }
  //   );

  //   validateQuery(
  //     'CONSULTAR MATERIAL',
  //     'SUBTEMA',
  //     'Porfavor escoge un subtema válido',
  //     () => {
  //       MaterialService.getAll().then(({ data }) => {
  //         setMessage([
  //           data.map((material, index) => (
  //             <Fragment key={material.id_mat}>
  //               {index === 0 && (
  //                 <p>
  //                   Escoge el material del que quieras{' '}
  //                   {optionChat.toLowerCase()}
  //                 </p>
  //               )}
  //               <p className='px-5'>
  //                 {index + 1}.- {material.url_mat}
  //               </p>
  //             </Fragment>
  //           )),
  //         ] as React.ReactNode[]);
  //         setQuery('SUBTEMA');
  //         setLastMessage('Escoge la unidad de aprendizaje que quiera');
  //       });
  //     }
  //   );
  // }, [userMessage]);

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messagesChat]);

  return (
    <main className='flex  h-screen grid-cols-1 bg-white pr-12 pt-20 dark:bg-[#22222A] lg:grid-cols-[30%,1fr]'>
      <section className={` transition-all md:w-1/3 lg:w-1/3`}>
        <SearchChats />
        <div className='h-[66vh] max-w-full overflow-y-scroll py-5 scrollbar-default scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 scrollbar-track-rounded-full scrollbar-thumb-rounded-full dark:scrollbar-thumb-gray-700 md:pr-10 md:pl-6'>
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

      <section className='flex h-[89vh] w-full flex-col bg-gray-50  dark:bg-[#1E1F24]'>
        <InfoGroup name='Educational Material Assistant' />

        <div className='h-full overflow-y-scroll py-5 px-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-700 scrollbar-track-rounded-full scrollbar-thumb-rounded-full '>
          <Divider />
          {messagesChat?.map(({ name, src, messages, main }, index) => (
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
          setChats={setMessagesChat}
          setUserMessage={setUserMessage}
          setQuery={setQuery}
          setLastQuery={setOptionChat}
        />
      </section>
    </main>
  );
};

export default ChatPage;
