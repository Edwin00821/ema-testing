import { IMEstudiante, IMAdmin } from 'interfaces/Entities';
import { configureStore } from '@reduxjs/toolkit';
import { studentReducer, adminReducer } from './states';

export interface AppStore {
  student: IMEstudiante;
  admin: IMAdmin;
}

export default configureStore({
  reducer: {
    student: studentReducer,
    admin: adminReducer,
  },
});
