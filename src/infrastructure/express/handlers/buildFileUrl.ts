import { Request } from "express";

export const buildFileUrl = (path: string, req: Request) => {
  return `${req.protocol}://${req.headers.host}/public${path}`;
};
