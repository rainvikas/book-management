const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController')
const BookController = require('../controllers/bookController')
const ReviewController = require('../controllers/reviewController')
const Middleware = require('../middleware/auth')


router.post('/register', UserController.createUser)

router.post('/login', UserController.loginUser)

router.post('/books',Middleware.authentication, BookController.createBook)

router.get('/getbooks',Middleware.authentication, BookController.getBooks)

router.get('/books/:bookId',Middleware.authentication, BookController.getBookById)

router.put('/books/:bookId', Middleware.authentication,Middleware.authorization,BookController.updateBook)

router.delete('/books/:bookId',Middleware.authentication,Middleware.authorization, BookController.deleteBook)

router.post('/books/:bookId/review', ReviewController.createReview)

router.put('/books/:bookId/review/:reviewId', ReviewController.updateReview)

router.delete('/books/:bookId/review/:reviewId', ReviewController.deleteReview)




module.exports = router;






