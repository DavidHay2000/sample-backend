
import express, {Express, Request, Response} from 'express'; 

function loggerMiddleware(request:Request, response:Response, next:Function) {
    console.log(`${request.method} ${request.path}`);
    next();
  }
const app: Express = express();

app.use(express.json());
app.use(loggerMiddleware);
 

app.post('/', (request:Request, response:Response) => {
    response.send(request.body);
  });
 
app.listen(5000);