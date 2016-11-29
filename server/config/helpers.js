
exports.errorLogger = function (error, req, res, next) {
  console.log('++++++++++');
  console.error(error.stack);
  next(error);
};

exports.errorHandler = function (error, req, res, next) {
    console.log('----------');
  res.status(500).send({ error: error.message });
};
