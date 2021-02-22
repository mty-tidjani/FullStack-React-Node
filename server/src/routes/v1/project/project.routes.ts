import { ProjectController } from '../../../v1/controllers';
//this is the admin router file
import { BaseRoute } from '../../base.routes';
import { Router } from 'express';
import { jwtAuthVerify } from '../../../v1/middlewares/jwt.middleware';
import * as mdwr from './project.mdwr';

export class ProjectRoutes extends BaseRoute {
  public static path = '/project';
  private static instance: ProjectRoutes;

  private constructor() {
    super();
    this.init();
  }

  static get router(): Router {
    if (!ProjectRoutes.instance) {
      ProjectRoutes.instance = new ProjectRoutes();
    }
    return ProjectRoutes.instance.router;
  }

  private async init() {

    this.router.post('/invite-user', jwtAuthVerify, ProjectController.inviteUser);

    this.router.post('/respond-invite', jwtAuthVerify, ProjectController.respondInvite);

    this.router.post('/leave-book', jwtAuthVerify, ProjectController.leaveBook);

    //CRUD Operations

    this.router.post('/', jwtAuthVerify, mdwr.create, ProjectController.create);

    this.router.patch('/:id', jwtAuthVerify, ProjectController.update);

    this.router.delete('/:id', jwtAuthVerify, ProjectController.delete);
    
    this.router.get('/', jwtAuthVerify, ProjectController.getMany);

    this.router.get('/:id', jwtAuthVerify, ProjectController.getOne);

  }
}
