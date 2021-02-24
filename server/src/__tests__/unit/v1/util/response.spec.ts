// sendResp

// handleError

import { handleError, sendResp } from "../../../../v1/util";


describe('Response utils', () => {

  const res = {
    status: jest.fn().mockReturnThis(),
    json:   jest.fn().mockReturnValue(2)
  };

  it('Should check send response method', () => {
    const headerCode = 200;
    sendResp(res as any, {
      headerCode,
      message: "",
      success: true,
      statusCode: 300
    });
    
    expect(res.status).toHaveBeenCalledWith(headerCode);

  });

  it('Should check handle error method', () => {
    //@ts-ignore
    global.logger = { error : jest.fn()};

    const err = new Error('Lorem is not ipsum');

    handleError(res as any, err, {});

    expect(global.logger.error).toHaveBeenCalledWith(err);

    expect(res.status).toHaveBeenCalledWith(500);

  });
});