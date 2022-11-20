import { IDUser } from '../interfaces/Entities';
import { RowDataPacket } from 'mysql2';

interface MDUser extends RowDataPacket, IDUser {}

export default MDUser;
