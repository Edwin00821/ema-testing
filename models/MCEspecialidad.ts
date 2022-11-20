import { ICEspecialidad } from '../interfaces/Entities';
import { RowDataPacket } from 'mysql2';

interface MCEspecialidad extends RowDataPacket, ICEspecialidad {}

export default MCEspecialidad;
