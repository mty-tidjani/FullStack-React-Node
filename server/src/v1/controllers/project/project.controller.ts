import { Request, Response } from "express";
import { projectSCD, SUCCESS } from "../../constant";
import { Project } from "../../models/project/project.model";
import { RichRequest } from "../../types/common";
import { handleError, sendResp } from "../../util";

export class ProjectController {
  public static create = async (req: RichRequest, res: Response): Promise<unknown> => {
    const { title, desc } = req.body;
    const { userId } = req;
    try {
      const nbk = await Project.create({
        crtBy /* CREATED_BY */: userId,
        scd /* STATUS_CODE */: projectSCD.available,
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
      const nbks = await Project.find({ crtBy: userId, scd: projectSCD.available });

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