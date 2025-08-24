// routes/blog.routes.js
const express = require('express');
const router = express.Router();
const blogCtrl = require('../controllers/blog.controller');

router.post('/', blogCtrl.create);
router.put('/:id', blogCtrl.update);
router.get('/:id', blogCtrl.view);
router.delete('/:id', blogCtrl.delete);
router.post('/upload', blogCtrl.upload);
router.get('/search', blogCtrl.search);
router.get('/', blogCtrl.sort); // sort by query param

module.exports = router;
