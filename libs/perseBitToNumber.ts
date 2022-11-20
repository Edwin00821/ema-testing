export const perseBitToNumber = (buffer: string | number) =>
  Number(Buffer.from(String(buffer)).readInt8());
