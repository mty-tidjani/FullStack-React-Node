import { UserController } from '../../../v1/controllers';
//this is the admin router file
import { BaseRoute } from '../../base.routes';
import { Router } from 'express';
import { jwtAuthVerify } from '../../../v1/middlewares/jwt.middleware';


export class UserRoutes extends BaseRoute {
  public static path = '/users';
  private static instance: UserRoutes;

  private constructor() {
    super();
    this.init();
  }

  static get router(): Router {
    if (!UserRoutes.instance) {
      UserRoutes.instance = new UserRoutes();
    }
    return UserRoutes.instance.router;
  }

  private async init() {

    this.router.get('/me', jwtAuthVerify, UserController.user);
  }
}
