import { ICRol } from 'interfaces/Entities';
import { RowDataPacket } from 'mysql2';

interface MCRol extends RowDataPacket, ICRol {}

export default MCRol;
