import expressAsyncHandler from 'express-async-handler';

import {Comic} from '../models/index.js';

export const getComics = expressAsyncHandler(async (req, res) => {
  const comics = await Comic.find({});
  res.status(200).json(comics)
})

export const getComicByID = expressAsyncHandler(async (req, res) => {
  const comic = await Comic.findById(req.params.comicId);
  if (comic) {
    res.status(200).json(comic)
  } else {
    res.status(404)
    throw new Error('Comic not found')
  }
})