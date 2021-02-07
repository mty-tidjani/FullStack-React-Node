import { NoteBookController } from '../../../v1/controllers';
//this is the admin router file
import { BaseRoute } from '../../base.routes';
import { Router } from 'express';
import { jwtAuthVerify } from '../../../v1/middlewares/jwt.middleware';
import * as mdwr from './notebook.mdwr';

export class NoteBookRoutes extends BaseRoute {
  public static path = '/notebook';
  private static instance: NoteBookRoutes;

  private constructor() {
    super();
    this.init();
  }

  static get router(): Router {
    if (!NoteBookRoutes.instance) {
      NoteBookRoutes.instance = new NoteBookRoutes();
    }
    return NoteBookRoutes.instance.router;
  }

  private async init() {

    this.router.post('/invite-user', jwtAuthVerify, NoteBookController.inviteUser);

    this.router.post('/respond-invite', jwtAuthVerify, NoteBookController.respondInvite);

    this.router.post('/leave-book', jwtAuthVerify, NoteBookController.leaveBook);

    //CRUD Operations

    this.router.post('/', jwtAuthVerify, mdwr.create, NoteBookController.create);

    this.router.patch('/:id', jwtAuthVerify, NoteBookController.update);

    this.router.delete('/:id', jwtAuthVerify, NoteBookController.delete);
    
    this.router.get('/', jwtAuthVerify, NoteBookController.getMany);

    this.router.get('/:id', jwtAuthVerify, NoteBookController.getOne);

  }
}
