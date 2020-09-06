import express from 'express';
import { errorHandler } from './src/middleware/ErrorHandler';
import routers from './src/components/router';
const expressApp = express();

// middleware



// routers
for (const router of routers) {
    expressApp.use(router.path, router.router)
}

// error handle
expressApp.use(errorHandler)

// run Express Server
expressApp.listen(3001, () => {
    console.log('server is running at port 3000')
});
