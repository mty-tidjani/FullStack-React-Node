import { Request, Response } from "express";

export class NoteBookController {
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

  public static inviteUser = (req: Request, res: Response): unknown => {
    return res.json({ success: true });
  }

  public static respondInvite = (req: Request, res: Response): unknown => {
    return res.json({ success: true });
  }

  public static leaveBook = (req: Request, res: Response): unknown => {
    return res.json({ success: true });
  }

}