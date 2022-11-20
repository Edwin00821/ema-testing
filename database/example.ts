const User = [
  {
    id: 1,
    email: 'admin@gmail.com',
    password: 'admin',
    rol: 'admin',
    dataAdmin: {
      num_empleado: 123456890,
      persona: {
        nombre: 'Juan',
      },
    },
  },
  {
    id: 2,
    email: 'estudiante@gmail.com',
    password: 'estudiante',
    rol: 'estudiante',
    dataEstudiante: {
      boleta: 123456890,
      especialidad: 'Seguridad Web',
      semestre: 5,
      persona: {
        nombre: 'Pepe',
      },
    },
  },
];

const User2 = [
  {
    id: 1,
    email: 'admin@gmail.com',
    password: 'admin',
    rol: 'admin',
    persona: {
      nombre: 'Juan',
      dataAdmin: { num_empleado: 123456890 },
    },
  },

  {
    id: 2,
    email: 'estudiante@gmail.com',
    password: 'estudiante',
    rol: 'estudiante',
    dataEstudiante: {
      boleta: 123456890,
      especialidad: 'Seguridad Web',
      semestre: 5,
      persona: {
        nombre: 'Pepe',
      },
    },
  },
];

const qureryEspecialidad = {
  id: 1,
  especialidad: 'Programacion',
  ua: [
    { id: 1, nombre: 'UA1', temas: { id: 1, nombre: 'tema1' } },
    { id: 2, nombre: 'UA2' },
  ],
};
