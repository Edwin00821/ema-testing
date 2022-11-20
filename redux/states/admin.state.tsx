import { IMAdmin } from 'interfaces/Entities';
import { createSlice } from '@reduxjs/toolkit';

export const AdminEmptyState: IMAdmin = {
  isLogued: false,
  num_empleado: '',
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
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState: AdminEmptyState,
  reducers: {
    createAdmin: (state, action) => (state = action.payload),
    updeteAdmin: (state, action) => ({ ...state, ...action.payload }),
    deleteAdmin: (state) => (state = AdminEmptyState),
  },
});

export const {
  createAdmin: createAdmin,
  updeteAdmin,
  deleteAdmin,
} = adminSlice.actions;

export default adminSlice.reducer;
