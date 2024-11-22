import { NextFunction } from "express";
import { IJwtService } from "../../jwt/interfaces/IJwtService";
import { UnauthorizedException } from "../../../domain/exceptions/UnauthorizedException";
import { IAuthRequest } from "../interfaces/IAuthRequest";

export const authMiddleware = (jwtService: IJwtService) => {
  return (req: IAuthRequest, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];

      if (!token) {
        throw new UnauthorizedException("Invalid token provided");
      }

      const decoded = jwtService.verifyToken(token);

      req.actor = decoded;
      next();
    } catch (error) {
      next(new UnauthorizedException("Invalid or expired token"));
    }
  };
};
