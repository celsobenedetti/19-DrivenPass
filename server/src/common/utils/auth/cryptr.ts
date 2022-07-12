import Cryptr from "cryptr";

const cryptr = new Cryptr(process.env.ENCRYPTION_SECRET);

export const encryptString = (s: string) => cryptr.encrypt(s);
export const decryptString = (s: string) => cryptr.decrypt(s);
