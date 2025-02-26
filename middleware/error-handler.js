const errorHandlerMiddleware = (err, req, res, next) => {
//   return res.status(500).json({ msg: err });
    console.log(err)
  return res.status(500).json({msg: 'Something went wrong, try again later.'})  // can also hard code a message, not as large
};

module.exports = errorHandlerMiddleware