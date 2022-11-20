import { ICGenero } from 'interfaces/Entities';
import { RowDataPacket } from 'mysql2';

interface MCGenero extends RowDataPacket, ICGenero {}

export default MCGenero;
