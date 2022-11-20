import { ICInteligencia } from 'interfaces/Entities';
import { RowDataPacket } from 'mysql2';

interface MCInteligencia extends RowDataPacket, ICInteligencia {}

export default MCInteligencia;
