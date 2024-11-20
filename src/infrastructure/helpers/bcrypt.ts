import bcrypt from "bcrypt";

const saltRounds = 10;

export const hash = async (data: string | Buffer): Promise<string> => {
  const salt = await bcrypt.genSalt(saltRounds);
  return bcrypt.hash(data, salt);
};

export const compare = async (plain: string | Buffer, encrypted: string): Promise<boolean> => {
  return bcrypt.compare(plain, encrypted);
};
