const estudiante = {
    boleta_est: 2021090043,
    user: {
      correo_user: 'edwinperez00821@gmail.com',
      password_user: 'AdiosMundoCruel1#',
      rol: {
        id_rol: 2,
        tipo_rol: 'Estudiante',
        valida_rol: { type: 'Buffer', data: [1] },
      },
      persona: {
        id_per: 1,
        nombre_per: 'Edwin Uriel',
        appat_per: 'Astudillo',
        apmat_per: 'Perez',
        fecha_de_nacimiento_per: new Date('2005-03-21'),
        genero: {
          id_gen: 1,
          tipo_gen: 'Masculino',
          valida_gen: { type: 'Buffer', data: [1] },
        },
        inteligencia: {
          id_int: 1,
          tipo_int: 'Linguistica',
          valida_int: { type: 'Buffer', data: [1] },
        },
        valida_per: { type: 'Buffer', data: [1] },
      },
      valida_user: { type: 'Buffer', data: [1] },
    },
    especialidad: {
      id_es: 1,
      nombre_es: 'Sistemas Computacionales',
      valida_es: { type: 'Buffer', data: [1] },
    },
    semestre: {
      id_sem: 1,
      tipo_sem: 'Quinto Semestre',
      valida_sem: { type: 'Buffer', data: [1] },
    },
    valida_est: { type: 'Buffer', data: [1] },
  };

  const {
    boleta_est,
    user: {
      correo_user,
      password_user,
      rol,
      persona: {
        id_per,
        nombre_per,
        appat_per,
        apmat_per,
        fecha_de_nacimiento_per,
        genero: { id_gen, tipo_gen, valida_gen },
        inteligencia: { id_int, tipo_int, valida_int },
        valida_per,
      },
    },
    especialidad: { id_es, nombre_es, valida_es },
    semestre: { id_sem, tipo_sem, valida_sem },
    valida_est,
  } = estudiante;