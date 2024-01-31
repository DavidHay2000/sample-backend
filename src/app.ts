
import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import IController from 'interfaces/controller.interface';
 
export default class App {
  public app: express.Application;
  public port: number;
 
  constructor(controllers:IController[], port:number) {
    this.app = express();
    this.port = port;
 
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }
 
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }
 
  private initializeControllers(controllers:IController[]) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}