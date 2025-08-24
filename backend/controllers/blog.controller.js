// controllers/blog.controller.js
const { success, error } = require("../utils/response");
const Blog = require("../models/blog.model");

exports.create = async (req, res) => {
  try {
    const { title, content } = req.body;
    const blog = await Blog.create({ title, content });
    return success(res, blog, "Tạo blog thành công");
  } catch (err) {
    return error(res, err.message);
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const blog = await Blog.findByIdAndUpdate(id, { title, content }, { new: true });
    if (!blog) return error(res, "Không tìm thấy blog", 404);
    return success(res, blog, "Cập nhật thành công");
  } catch (err) {
    return error(res, err.message);
  }
};

exports.view = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) return error(res, "Không tìm thấy blog", 404);
    return success(res, blog, "Lấy blog thành công");
  } catch (err) {
    return error(res, err.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    return success(res, null, "Xóa thành công");
  } catch (err) {
    return error(res, err.message);
  }
};

exports.upload = async (req, res) => {
  // TODO: Xử lý upload file thực tế
  return success(res, { url: "fake-url" }, "Upload thành công");
};

exports.search = async (req, res) => {
  try {
    const { q } = req.query;
    const result = await Blog.find({
      $or: [
        { title: { $regex: q, $options: 'i' } },
        { content: { $regex: q, $options: 'i' } }
      ]
    });
    return success(res, result, "Tìm kiếm thành công");
  } catch (err) {
    return error(res, err.message);
  }
};

exports.sort = async (req, res) => {
  try {
    const { sort } = req.query;
    let sortObj = {};
    if (sort === 'title') sortObj.title = 1;
    else sortObj.createdAt = -1;
    const blogs = await Blog.find().sort(sortObj);
    return success(res, blogs, "Sắp xếp thành công");
  } catch (err) {
    return error(res, err.message);
  }
};
