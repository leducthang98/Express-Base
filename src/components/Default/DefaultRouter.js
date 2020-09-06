import { Router } from 'express';
import { controllerHandler } from '../../middleware/ErrorHandler';
import { defaultController } from './DefaultController';


const path = '/default';
const router = Router();

router.get('/',controllerHandler(defaultController));


// export
export default { path, router };
