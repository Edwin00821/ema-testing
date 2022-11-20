import { IMMaterial } from 'interfaces/Entities';
import { RowDataPacket } from 'mysql2';

interface MMMaterial extends RowDataPacket, IMMaterial {}

export default MMMaterial;
