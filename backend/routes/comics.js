import express from 'express';
import expressAsyncHandler from 'express-async-handler';

import Comics from '../models/comics.js';

const router = express.Router();

router.get('/', expressAsyncHandler(async (req, res) => {
  const comics = await Comics.find({});
  res.status(200).json(comics)
}))

router.get('/:comicId', expressAsyncHandler(async (req, res) => {
  const comic = await Comics.findById(req.params.comicId);
  if (comic) {
    res.status(200).json(comic)
  } else {
    res.status(404)
    throw new Error('Comic not found')
  }
}))

export default router;