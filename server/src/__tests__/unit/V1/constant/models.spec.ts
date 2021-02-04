import { MODEL } from "../../../../V1/constant";


describe('Model constants check', () => {
  it('Should check check Model', () => {

    expect(Object.keys(MODEL)).toBeGreaterThanOrEqual(1);

  });
});