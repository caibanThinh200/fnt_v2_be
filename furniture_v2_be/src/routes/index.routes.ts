import AuthRoute from './Auth.routes';
import {Express} from 'express'

export default (app: Express) => {
    app.use('/auth', AuthRoute);
}