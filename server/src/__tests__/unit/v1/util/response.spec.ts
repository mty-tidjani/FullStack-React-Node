// sendResp

// handleError

import { handleError, sendResp } from "../../../../v1/util";


describe('Response utils', () => {

  let called = false;
  afterEach(() => {
    called = false;
  });

  const res = {
    status: () => ({
      json:  () => {
        called = true;
      }
    })
  };

  it('Should check send response method', () => {

    sendResp(res as any, {
      headerCode: 200,
      message: "",
      success: true,
      statusCode: 300
    });
    
    expect(called).toBe(true);

  });

  it('Should check handle error method', () => {
    //@ts-ignore
    global.logger = { error : () => null};

    const err = new Error('Lorem is not ipsum');

    handleError(res as any, err, {});

    expect(called).toBe(true);

  });
});