const errorHandlerMiddleware = (err, req, res, next) => {
//   return res.status(500).json({ msg: err });
    console.log(err)
  return res.status(err.status).json({msg: err.message})  // can also hard code a message, not as large
                                                        // err.status and err.message uses object values passed in
};

module.exports = errorHandlerMiddleware