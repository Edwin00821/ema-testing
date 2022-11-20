import { IESemEsp } from '../interfaces/Entities';
import { RowDataPacket } from 'mysql2';

interface MESemEsp extends RowDataPacket, IESemEsp {}

export default MESemEsp;