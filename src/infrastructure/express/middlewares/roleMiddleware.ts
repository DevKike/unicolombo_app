import { NextFunction, Response } from "express";
import { IRequest } from "../interfaces/IRequest";

export const roleMiddleware = (roles: string[]) => {
    return (req: IRequest, res: Response, next: NextFunction) => {
        try {
            
        } catch (error) {
            
        }
    }
};
