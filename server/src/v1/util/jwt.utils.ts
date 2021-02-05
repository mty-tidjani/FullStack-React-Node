import * as jwt from 'jsonwebtoken';
import config from '../../core/config';

export const jwtTokenGenerator = async (data: string|Record<string, unknown>|Buffer): Promise<string> => {
  const tokenData = data || {};
  const token = await jwt.sign(tokenData, config.jwt, {
    algorithm: 'HS256', expiresIn:  5 * 24 * 60
  });
  return token;
};

export const jwtTokenDecoder = (token: string): any => {
  try {
    const tokenData = jwt.verify(token, config.jwt, 
      { algorithms: ['HS256'], ignoreExpiration: true });
    if(!tokenData) return { failed: true };
    return { success: true, tokenData };
  } catch(err) {
    global.log("err: ", err);
    return { success: false };
  }
};