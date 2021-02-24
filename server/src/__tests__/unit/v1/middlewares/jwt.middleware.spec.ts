import { ERROR } from "../../../../v1/constant";
import { jwtAuthVerify } from "../../../../v1/middlewares";
import { User } from "../../../../v1/models";
import { jwtTokenGenerator } from "../../../../v1/util/jwt.utils";

describe('JWT middleware test', () => {

  const next = jest.fn();

  //@ts-ignore
  global.logger = { error : jest.fn()};

  let mockRes: any;

  beforeEach(() => {
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json:   jest.fn().mockReturnValue(2),
    };
  });

  it('should call ERROR.JWT_TOKEN_INVALID for wrongly formated token', () => {
    const mockReq: any = {
      headers: {
        'authorization': '',
      }
    };

    jwtAuthVerify(mockReq, mockRes, next);

    expect(mockRes.status).toBeCalledWith(ERROR.JWT_TOKEN_INVALID.headerCode);

  });

  it('should call ERROR.JWT_TOKEN_INVALID for invalid token', () => {
    const mockReq: any = {
      headers: {
        'authorization': 'Bearer xxxxxxxx',
      }
    };

    jwtAuthVerify(mockReq, mockRes, next);

    expect(mockRes.status).toBeCalledWith(ERROR.JWT_TOKEN_INVALID.headerCode);

  });

  describe('Valid jwt cases', () => {
    const mockUser = {
      _id: 'xxxxxxxxxxxxxxxxx'
    };

    const tokenData = {
      uid: mockUser._id,
    };

    const jwtToken = jwtTokenGenerator(tokenData);

    const mockReq: any = {
      headers: {
        'authorization': 'Bearer ' + jwtToken,
      }
    };
    
    it('should call res.json with 500 since User model is not mocked', async () => {

      await jwtAuthVerify(mockReq, mockRes, next);
  
      expect(mockRes.status).toBeCalledWith(500);
  
    });

    it('should call next function because User Model is inside', async () => {

      User.findOne = jest.fn().mockResolvedValue({});

      await jwtAuthVerify(mockReq, mockRes, next);
  
      expect(next).toBeCalledTimes(1);
  
    });

  });
});
