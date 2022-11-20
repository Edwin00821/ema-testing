import { ICParcial } from 'interfaces/Entities';
import { RowDataPacket } from 'mysql2';

interface MCParcial extends RowDataPacket, ICParcial {}

export default MCParcial;
