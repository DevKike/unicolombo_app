import { Request } from "express";
import { IJwtPayload } from "../../jwt/interfaces/IJwtPayload";

export interface IRequest extends Request {
  actor?: IJwtPayload;
}
