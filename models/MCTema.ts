import { ICTema } from 'interfaces/Entities';
import { RowDataPacket } from 'mysql2';

interface MCTema extends RowDataPacket, ICTema {}

export default MCTema;
