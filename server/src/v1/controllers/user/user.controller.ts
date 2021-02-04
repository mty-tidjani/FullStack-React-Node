import { Response } from "express";
import { RichRequest } from "../../types/common";

export class UserController {
  public static user = (req: RichRequest, res: Response): unknown => {
    const { userId } = req;

    return res.json({ success: true, userId });
  }
}
