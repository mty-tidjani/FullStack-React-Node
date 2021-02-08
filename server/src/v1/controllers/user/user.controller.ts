import { Response } from "express";
import { SUCCESS } from "../../constant";
import { User } from "../../models";
import { RichRequest } from "../../types/common";
import { handleError, sendResp } from "../../util";
import { jwtTokenGenerator } from "../../util/jwt.utils";

export class UserController {
  public static user = async (req: RichRequest, res: Response): Promise<unknown> => {
    const { userId } = req;
    try {
      const user = await User.findById(userId).orFail();

      const rtn = { user: { _id: user._id, usrNM: user.usrNM }, token: ''};
      rtn.token = await jwtTokenGenerator({
        uid: user._id,
      });

      return sendResp(res, SUCCESS.DEFAULT, rtn);
    } catch (err) {
      return handleError(res, err);
    }
  }
}
