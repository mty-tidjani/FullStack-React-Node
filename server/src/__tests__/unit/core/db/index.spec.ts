import con from 'mongoose';
import dbConnect from "../../../../core/db";


describe('Database function', () => {
  it('Should check if dbConnect is valid', async () => {

    // @ts-ignore
    con.connect = jest.fn().mockResolvedValue(undefined);
    // @ts-ignore
    global.logger = console;

    expect(await dbConnect()).toBe(undefined);

    expect(con.connect).toBeCalled();

  });
});