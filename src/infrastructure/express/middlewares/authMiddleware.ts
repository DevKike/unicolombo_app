import { NextFunction, Request, Response } from "express";
import { UnauthorizedException } from "../../../domain/exceptions/UnauthorizedException";
import { IAuthRequest } from "../interfaces/IAuthRequest";
import { JwtService } from "../../services/jwt/JwtService";

export const authMiddleware = () => {
  const jwtService = JwtService.getInstance();

  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];

      if (!token) {
        throw new UnauthorizedException("Invalid token provided");
      }

      const decoded = jwtService.verifyToken(token);
      const authReq = req as IAuthRequest;

      authReq.actor = decoded;
      next();
    } catch (error) {
      next(error);
    }
  };
};
