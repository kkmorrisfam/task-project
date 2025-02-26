const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error); //to have express.js to handle errors in async function, pass error to next()
    }
  };
};

module.exports = asyncWrapper;
