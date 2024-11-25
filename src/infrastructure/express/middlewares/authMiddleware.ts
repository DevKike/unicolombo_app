import { NextFunction, Response } from "express";
import { UnauthorizedException } from "../../../domain/exceptions/UnauthorizedException";
import { JwtService } from "../../services/jwt/JwtService";
import { IRequest } from "../interfaces/IRequest";
import { ResponseModel } from "../response/ResponseModel";
import { HttpStatusCode } from "../../../domain/enums/http/HttpStatusCode";
import { Message } from "../../../domain/enums/message/Message";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";

export const authMiddleware = () => {
  const jwtService = JwtService.getInstance();

  return async (req: IRequest, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];

      if (!token) {
        throw new UnauthorizedException("Invalid token provided");
      }

      try {
        const decoded = jwtService.verifyToken(token);
        req.actor = decoded;

        
        next();
      } catch (error) {
        if (error instanceof TokenExpiredError) {
          throw new UnauthorizedException("Token has expired");
        } else if (error instanceof JsonWebTokenError) {
          throw new UnauthorizedException("Invalid token");
        } else {
          throw new UnauthorizedException("Authentication error");
        }
      }
    } catch (error) {
      await ResponseModel.manageResponse(
        Promise.reject(
          error instanceof UnauthorizedException
            ? error
            : new UnauthorizedException("Unexpected authentication error")
        ),
        res,
        HttpStatusCode.UNAUTHORIZED,
        Message.UNAUTHORIZED
      );
    }
  };
};
