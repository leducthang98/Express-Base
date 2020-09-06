import express from 'express';
import { errorHandler } from './src/middleware/ErrorHandler';
import routers from './src/components/router';
import CommonConfig from './src/config/CommonConfig';
import { corsMiddleware } from './src/middleware/Cors';
import bodyParser from 'body-parser';
const expressApp = express();

// middleware
expressApp.use(corsMiddleware);
expressApp.use(bodyParser.json({ limit: '50mb' }));
expressApp.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb',
}));

// routers
for (const router of routers) {
    expressApp.use(router.path, router.router)
}

// error handle
expressApp.use(errorHandler)

// run Express Server
expressApp.listen(CommonConfig.PORT, () => {
    console.log('server is running at port ', CommonConfig.PORT)
});
