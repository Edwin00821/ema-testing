import { IMEstudiante, IMAdmin } from 'interfaces/Entities';
import { createSlice } from '@reduxjs/toolkit';

export const StudentEmptyState: IMEstudiante = {
  isLogued: false,
  boleta_est: '',
  user: {
    correo_user: '',
    rol: {
      id_rol: null,
      tipo_rol: '',
    },
    persona: {
      id_per: null,
      nombre_per: '',
      appat_per: '',
      apmat_per: '',
      fecha_de_nacimiento_per: '',
      genero: {
        id_gen: null,
        tipo_gen: '',
      },
      inteligencia: {
        id_int: null,
        tipo_int: '',
      },
    },
  },
  especialidad: {
    id_es: null,
    nombre_es: '',
  },
  semestre: {
    id_sem: null,
    tipo_sem: '',
  },
};
type ActionStudent = { payload: IMEstudiante; type: string };
export const studentSlice = createSlice({
  name: 'student',
  initialState: StudentEmptyState,
  reducers: {
    createStudent: (state, action: ActionStudent) => (state = action.payload),
    updeteStudent: (state, action: ActionStudent) => ({
      ...state,
      ...action.payload,
    }),
    deleteStudent: (state) => (state = StudentEmptyState),
  },
});

export const { createStudent, updeteStudent, deleteStudent } =
  studentSlice.actions;

export default studentSlice.reducer;
