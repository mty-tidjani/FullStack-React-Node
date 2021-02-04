import { NextFunction, Request, Response } from "express";

export const jwtAuthVerify = (req: Request, res: Response, next: NextFunction): void => {
  
  next();
};