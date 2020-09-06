export const controllerHandler = f => async (req, res, next) => {
  try {
    await f(req, res, next);
  } catch (error) {
    next(error);
  }
};

export const errorHandler = (error, req, res, next) => {
  if (typeof error === 'string') {
    res.status(500).json({ errorMessage: error });
  } else {
    res.status(error.status || 500).json(error);
  }
};
