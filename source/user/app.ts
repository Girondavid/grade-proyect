import express, { Application} from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import dbInit from './infrastructure/DB/mongo';
import Useroute from './infrastructure/routes/RouterUser';


class Server {
    protected app: Application;

    constructor() {
        this.app = express();
        this.configuration();
        this.Start();
    }
    
    configuration() {
        this.app.set('port', 4000);
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(helmet.xssFilter());
        this.app.use(helmet.noSniff());
        this.app.use(helmet.hidePoweredBy());
        this.app.use(helmet.frameguard({ action: 'deny' }));
        this.app.use(compression());
        this.app.use(cors());
        this.app.use(Useroute);
    }
    Start() {
        dbInit().then();
        this.app.listen(this.app.get('port'), () => {
            console.log('server on port ', this.app.get('port'));
        });
    }

}
const server = new Server();
export default server;