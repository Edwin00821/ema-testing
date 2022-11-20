import { IMPersona } from 'interfaces/Entities';
import { RowDataPacket } from 'mysql2';

interface MMPersona extends RowDataPacket, IMPersona {}

export default MMPersona;
