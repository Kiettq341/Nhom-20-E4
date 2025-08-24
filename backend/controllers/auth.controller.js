// controllers/auth.controller.js
const { success, error } = require("../utils/response");

exports.login = async (req, res) => {
  // TODO: Xử lý xác thực user, tạo token
  const { username, password } = req.body;
  // Giả lập user hợp lệ
  if (username === 'admin' && password === '123456') {
    const token = 'fake-jwt-token';
    return success(res, { token }, "Đăng nhập thành công");
  }
  return error(res, "Sai tài khoản hoặc mật khẩu", 401);
};

exports.logout = async (req, res) => {
  // TODO: Xử lý logout thực tế nếu cần
  return success(res, null, "Đăng xuất thành công");
};
