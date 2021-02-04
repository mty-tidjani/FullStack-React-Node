import { Request, Response } from "express";

export class AuthController {
  public static signup = (req: Request, res: Response): unknown => {
    return res.json({ success: true });
  }

  public static signin = (req: Request, res: Response): unknown => {
    return res.json({ success: true });
  }
}