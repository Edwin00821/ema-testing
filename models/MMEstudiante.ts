import { IMEstudiante } from '../interfaces/Entities';
import { RowDataPacket } from 'mysql2';

interface MMEstudiante extends RowDataPacket, IMEstudiante {}

export default MMEstudiante;
