const express=require('express');
const Book = require('../models/Book');
const router=express.Router();
const bookController=require('../controllers/book-controller');



router.get('/',bookController.getAllBooks);
router.post('/',bookController.addBooks);
router.get('/:id',bookController.getBookbyid);
router.put('/:id',bookController.updateBook);
router.delete('/:id',bookController.deleteBook);
module.exports=router;