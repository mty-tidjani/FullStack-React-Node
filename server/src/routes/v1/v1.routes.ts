import { Router } from "express";
import { BaseRoute } from "../base.routes";
import { UserRoutes } from "./user";
import { AuthRoutes } from "./user";
import { TodoRoutes } from "./todo/todo.routes";
import { NoteBookRoutes } from "./notebook/notebook.routes";


export class V1Routes extends BaseRoute {
  public static path = "/v1";
  private static instance: V1Routes;

  private constructor() {
    super();
    this.init();
  }

  static get router(): Router {
    //applying singleton method to create only one instance of the router class
    if (!V1Routes.instance) {
      V1Routes.instance = new V1Routes();
    }
    return V1Routes.instance.router;
  }

  private init() {
    this.router.use(UserRoutes.path, UserRoutes.router);
    this.router.use(AuthRoutes.path, AuthRoutes.router);
    this.router.use(NoteBookRoutes.path, NoteBookRoutes.router);
    this.router.use(TodoRoutes.path, TodoRoutes.router);
  }
}
