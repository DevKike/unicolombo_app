import { NextFunction, Response } from "express";
import { UnauthorizedException } from "../../../domain/exceptions/UnauthorizedException";
import { JwtService } from "../../services/jwt/JwtService";
import { IRequest } from "../interfaces/IRequest";

export const authMiddleware = () => {
  const jwtService = JwtService.getInstance();

  return (req: IRequest, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];

      if (!token) {
        throw new UnauthorizedException("Invalid token provided");
      }

      const decoded = jwtService.verifyToken(token);
      
      req.actor = decoded;
      next();
    } catch (error) {
      next(error);
    }
  };
};
