// utils/response.js
exports.success = (res, data, message = "Thành công", status = 200) =>
  res.status(status).json({ status, message, data });

exports.error = (res, message = "Lỗi", status = 400, data = null) =>
  res.status(status).json({ status, message, data });
