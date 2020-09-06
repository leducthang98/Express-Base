import express from 'express';
import { errorHandler } from './src/middleware/ErrorHandler';
import routers from './src/components/router';
import CommonConfig from './src/config/CommonConfig';
const expressApp = express();

// middleware



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
