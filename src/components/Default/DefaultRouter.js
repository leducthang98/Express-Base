import { Router } from 'express';
import { controllerHandler } from '../../middleware/ErrorHandler';
import { defaultController, generateToken, bcryptGenerator, bcryptComparator } from './DefaultController';
import { jwtFilter } from '../../middleware/Authenticate';

const path = '/default';
const router = Router();

router.get('/', (req, res) => {
    res.send('default')
})

router.get('/students/:id', jwtFilter, controllerHandler(defaultController));

router.get('/generateToken', controllerHandler(generateToken));

router.get('/createBcrypt', controllerHandler(bcryptGenerator));

router.get('/compareBcrypt', controllerHandler(bcryptComparator));


export default { path, router };
