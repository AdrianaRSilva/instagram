  
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/', postController.index);
router.post('/', postController.create);
router.put('/:id',postController.update);
router.delete('/:id',postController.delete);


module.exports = router;