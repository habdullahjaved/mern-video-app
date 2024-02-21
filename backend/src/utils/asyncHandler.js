const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};
export { asyncHandler };
// const asyncHandler = () => {};
// const asyncHandler = (func) => () => {};
// const asyncHandler = (func) => async () => {};
// const asyncHandler = (func) => async (err, req, res, next) => {
//   try {
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       massage: error.massage,
//     });
//   }
// };
