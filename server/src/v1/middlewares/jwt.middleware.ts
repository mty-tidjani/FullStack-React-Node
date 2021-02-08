import { NextFunction, Response } from "express";
import { ERROR } from "../constant";
import { User } from "../models";
import { RichRequest } from "../types/common";
import { sendResp, handleError } from "../util";
import { jwtTokenDecoder } from "../util/jwt.utils";

export const jwtAuthVerify = async (req: RichRequest, res: Response, next: NextFunction): Promise<unknown> => {
  try {    
    const token = req.headers['authorization'];
    if (!token || !token.startsWith('Bearer ')) return sendResp(res, ERROR.JWT_TOKEN_INVALID, {});

    const tokenValue = token.replace('Bearer ', '');
    if (tokenValue.trim()) {
      const data = jwtTokenDecoder(tokenValue);
      if (data.success) {
        const user = await User.findOne({ _id: data.tokenData.uid });
        if (user) {
          req.userId = String(user._id);
          return next();
        }
      }
    } 
    return sendResp(res, ERROR.JWT_TOKEN_INVALID, {});
  } catch (err) {
    return handleError(res, err, {});
  }
};