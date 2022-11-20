import { ICSemestre } from 'interfaces/Entities';
import { RowDataPacket } from 'mysql2';

interface MCSemestre extends RowDataPacket, ICSemestre {}

export default MCSemestre;
