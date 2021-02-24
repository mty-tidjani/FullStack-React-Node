// jwtTokenGenerator

import { jwtTokenGenerator, jwtTokenDecoder } from "../../../../v1/util/jwt.utils";
// jwtTokenDecoder

describe('Check JWT util function', () => {
  let coded = "";

  it('Should check jwtTokenGenerator', async () => {
    
    const data = {
      name: "Tidjani"
    };

    coded = await jwtTokenGenerator(data);

    expect(coded).toMatch(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/);

  });

  it('Should check jwtTokenDecoder', async () => {

    coded = await jwtTokenDecoder(coded);

    expect(coded).toMatchObject({tokenData: {
      name: "Tidjani"
    }});

  });
});