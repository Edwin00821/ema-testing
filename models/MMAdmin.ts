import { IMAdmin } from '../interfaces/Entities';
import { RowDataPacket } from 'mysql2';

interface MMAdmin extends RowDataPacket, IMAdmin {}

export default MMAdmin;
