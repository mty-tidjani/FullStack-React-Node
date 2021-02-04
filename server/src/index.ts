
import { ApiRoutes } from './routes/index.routes';
import * as mongoose from 'mongoose';
import * as bodyParser from "body-parser";
import * as express from "express";
import * as cors from 'cors';
import * as path from 'path';
import * as http from 'http';
import * as morgan from 'morgan';
import { initGlobals } from './core/logger';
import dbConnect from './core/db';
// import { socketInit } from './v1/services';
class App {
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
  
    public app: express.Application;
    public server: http.Server;
  
    private initDependency(): void {
      this.app.use(bodyParser.json());
      this.app.use(cors());
      this.app.use(morgan('dev'));
      this.errorHandler();
      this.app.use(express.static(path.join(__dirname, '../public/images')));
    }
  
    private routes(): void {
      this.app.use(ApiRoutes.path, ApiRoutes.router);
      
      this.app.use((req, res) => {
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
      this.app.use((err, req, res, next) => {
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
  