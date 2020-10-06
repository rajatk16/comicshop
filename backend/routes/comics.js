import express from 'express';

import {getComics, getComicByID} from '../controllers/index.js';

const router = express.Router();

router.route('/').get(getComics);

router.route('/:comicId').get(getComicByID)

export {router as comicRoutes};