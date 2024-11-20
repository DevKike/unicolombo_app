import { IJwtPayload } from "./IJwtPayload";

export interface IJwtService {
  generateToken(payload: IJwtPayload): string;
  verifyToken(token: string): IJwtPayload;
}
