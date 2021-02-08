import { Request, Response } from "express";
import { noteBookSCD, SUCCESS } from "../../constant";
import { NoteBook } from "../../models/notebook/notebook.model";
import { RichRequest } from "../../types/common";
import { handleError, sendResp } from "../../util";

export class NoteBookController {
  public static create = async (req: RichRequest, res: Response): Promise<unknown> => {
    const { title, desc } = req.body;
    const { userId } = req;
    try {
      const nbk = await NoteBook.create({
        crtBy /* CREATED_BY */: userId,
        scd /* STATUS_CODE */: noteBookSCD.available,
        ttle /* Title */: title,
        desc /* Description */,
        lstUpdt /* Last Update */: Date.now(),
      });

      return sendResp(res, SUCCESS.DEFAULT, nbk);
    } catch (err) {
      return handleError(res, err);
    }
  }

  public static update = async (req: Request, res: Response): Promise<unknown> => {
    return res.json({ success: true });
  }

  public static delete = async (req: Request, res: Response): Promise<unknown> => {
    return res.json({ success: true });
  }

  public static getOne = async (req: Request, res: Response): Promise<unknown> => {
    return res.json({ success: true });
  }

  public static getMany = async (req: RichRequest, res: Response): Promise<unknown> => {
    const { userId } = req;
    try {
      const nbks = await NoteBook.find({ crtBy: userId, scd: noteBookSCD.available });

      return sendResp(res, SUCCESS.DEFAULT, nbks);
    } catch (err) {
      return handleError(res, err);
    }
  }

  public static inviteUser = async (req: Request, res: Response): Promise<unknown> => {
    return res.json({ success: true });
  }

  public static respondInvite = async (req: Request, res: Response): Promise<unknown> => {
    return res.json({ success: true });
  }

  public static leaveBook = async (req: Request, res: Response): Promise<unknown> => {
    return res.json({ success: true });
  }

}