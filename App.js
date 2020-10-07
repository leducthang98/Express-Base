import express from 'express';
import { errorHandler } from './src/middleware/ErrorHandler';
import routers from './src/components/router';
import CommonConfig from './src/config/CommonConfig';
import { corsMiddleware } from './src/middleware/Cors';
import bodyParser from 'body-parser';

// initialize express
const expressApp = express();

// initialize system middleware
expressApp.use(corsMiddleware);
expressApp.use(bodyParser.json({
  limit: '50mb'
}));
expressApp.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb',
}));

// initialize routers
for (const router of routers) {
  expressApp.use(router.path, router.router)
}

// add error handler
expressApp.use(errorHandler)

// listen
expressApp.listen(CommonConfig.PORT, () => {
  console.log('server is running at port', CommonConfig.PORT)
});
