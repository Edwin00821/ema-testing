import { ICSubtema } from '../interfaces/Entities';
import { RowDataPacket } from 'mysql2';

interface MCSubtema extends RowDataPacket, ICSubtema {}

export default MCSubtema;
