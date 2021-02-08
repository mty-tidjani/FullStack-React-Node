import { checkBody, validator } from "../../../v1/middlewares";

export const create = [
  checkBody('title'),
  checkBody('desc'),
  validator
];
