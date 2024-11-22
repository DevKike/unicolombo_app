import { Request } from "express";
import { IJwtPayload } from "../../jwt/interfaces/IJwtPayload";

export interface IAuthRequest extends Request {
  actor: IJwtPayload;
}
