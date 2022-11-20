import { ICUaprendizaje } from '../interfaces/Entities';
import { RowDataPacket } from 'mysql2';

interface MCUaprendizaje extends RowDataPacket, ICUaprendizaje {}

export default MCUaprendizaje;
