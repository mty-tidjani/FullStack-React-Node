
import { ApiRoutes } from './routes/index.routes';
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import express from "express";
import cors from 'cors';
import path from 'path';
import http from 'http';
import morgan from 'morgan';
import { initGlobals } from './core/logger';
import dbConnect from './core/db';
// import { socketInit } from './v1/services';
class App {
  public app: express.Application;
  public server: http.Server;
  
  constructor() {
    initGlobals(); //initialize new globals
    this.app = express();
    this.server = new http.Server(this.app);
    this.initDependency();
    dbConnect();
    mongoose.set('debug', false);
    this.routes();

    // socketInit.Instance(this.server); //stating the socket.io
  }
  
  private initDependency(): void {
    this.app.use(bodyParser.json());
    this.app.use(cors());
    this.app.use(morgan('dev'));
    this.errorHandler();
    this.app.use(express.static(path.join(__dirname, '../public/images')));
  }
  
  private routes(): void {
    this.app.use(ApiRoutes.path, ApiRoutes.router);

    // This can be commented if client and server are on diffferent domains
    // If you use startscript.sh or docker-compose you should not change anything here.
    this.app.use(express.static(path.join(__dirname, '../client')));

    this.app.get('*', (req, res) => {
      if (process.env.NODE_ENV === 'production') {
        return res.sendFile(path.resolve(__dirname, '../client', 'index.html'));
      }
      return res.json({ message: 'React Starter API' });
    });

    // Redirect other request to 
    this.app.use((_req, res) => {
      res.status(404).json({
        success: false,
        message: 'Invalid route',
        result: {},
        statusCode: 404,
      });
    });
  }
  
  // Unexpected error handler
  private errorHandler(): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.app.use((err: any, _req: any, res: any, _next: any) => {
      res.status(err.status || 500);
      return res.json({
        success: false,
        message: err.message,
        result: {},
        statusCode: err.status,
      });
    });
  }
}
  
export default new App().server;
  