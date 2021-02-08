import { Router } from 'express';
import { BaseRoute } from './base.routes';
import { V1Routes } from './v1/v1.routes';


export class ApiRoutes extends BaseRoute {

    public static path = '/api';
    private static instance: ApiRoutes;

    private constructor() {
      super();
      this.init();
    }

    static get router(): Router {
      //applying singleton method to create only one instance of the router class
      if (!ApiRoutes.instance) {
        ApiRoutes.instance = new ApiRoutes();
      }
      return ApiRoutes.instance.router;
    }

    private init() {
      // Version 1 routes
      this.router.use(V1Routes.path, V1Routes.router);
    }
}
