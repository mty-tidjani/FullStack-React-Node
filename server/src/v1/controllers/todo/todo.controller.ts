import { Request, Response } from "express";

export class TodoController {
  public static create = (req: Request, res: Response): unknown => {
    return res.json({ success: true });
  }

  public static update = (req: Request, res: Response): unknown => {
    return res.json({ success: true });
  }

  public static delete = (req: Request, res: Response): unknown => {
    return res.json({ success: true });
  }

  public static getOne = (req: Request, res: Response): unknown => {
    return res.json({ success: true });
  }

  public static getMany = (req: Request, res: Response): unknown => {
    return res.json({ success: true });
  }

}