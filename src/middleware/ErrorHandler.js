import { commonResponse } from "../constant/ResponseForm";

// run controller inside this function
export const controllerHandler = f => async (req, res, next) => {
  try {
    await f(req, res, next);
  } catch (error) {
    next(error);
  }
};

// error handler
export const errorHandler = (error, req, res, next) => {
  if (typeof error === 'string') {
    res.status(500);
    res.send(commonResponse(error, 2, 'server-side error'))
  } else {
    let code = -1;
    let message = 'unknown error';
    if (error.status >= 400 && error.status <= 499) {
      code = 1;
      message = 'client-side error';
    } else {
      code = 2;
      message = 'server-side error'
    }
    res.status(error.status || 500);
    res.send(commonResponse(error, code, message))
  }
};
