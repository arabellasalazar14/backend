import * as bookController from '../controllers/bookController.js';
import express from "express";

const bookRoute = express.Router();

bookRoute.get('/', bookController.fetchAllBooks);

export default bookRoute; 
