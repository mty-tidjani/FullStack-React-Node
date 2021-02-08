import { TodoController } from '../../../v1/controllers';
//this is the admin router file
import { BaseRoute } from '../../base.routes';
import { Router } from 'express';
import { jwtAuthVerify } from '../../../v1/middlewares/jwt.middleware';


export class TodoRoutes extends BaseRoute {
  public static path = '/todos';
  private static instance: TodoRoutes;

  private constructor() {
    super();
    this.init();
  }

  static get router(): Router {
    if (!TodoRoutes.instance) {
      TodoRoutes.instance = new TodoRoutes();
    }
    return TodoRoutes.instance.router;
  }

  private async init() {

    this.router.post('/assign', jwtAuthVerify, TodoController.create);

    this.router.post('/change-state', jwtAuthVerify, TodoController.create);
    
    this.router.post('/change-state', jwtAuthVerify, TodoController.create);

    // CRUD Operations

    this.router.post('/', jwtAuthVerify, TodoController.create);

    this.router.patch('/:id', jwtAuthVerify, TodoController.update);

    this.router.delete('/:id', jwtAuthVerify, TodoController.delete);
    
    this.router.get('/', jwtAuthVerify, TodoController.getMany);

    this.router.get('/:id', jwtAuthVerify, TodoController.getOne);
  }
}
