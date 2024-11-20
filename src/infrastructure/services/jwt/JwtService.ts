import { IJwtService } from "../../jwt/IJwtService";
import jwt from "jsonwebtoken";
import { Environment } from "../../environment/Environment";
import { IJwtPayload } from "../../jwt/IJwtPayload";

export class JwtService implements IJwtService {
  private secretKey: string;
  private expiresIn: string;

  constructor() {
    this.secretKey = Environment.JWT_SECRET_KEY;
    this.expiresIn = Environment.JWT_EXPIRES_IN;
  }

  generateToken(payload: IJwtPayload): string {
    return jwt.sign(payload, this.secretKey, { expiresIn: this.expiresIn });
  }

  verifyToken(token: string): IJwtPayload {
    try {
      return jwt.verify(token, this.secretKey) as IJwtPayload;
    } catch (error) {
      throw error;
    }
  }
}
