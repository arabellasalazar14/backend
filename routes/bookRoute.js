import * as bookController from '../controllers/bookController.js';
import express from "express";

const bookRoute = express.Router();

bookRoute.get('/all', bookController.fetchAllBooks);
bookRoute.post('/', bookController.createBook);

export default bookRoute; 
