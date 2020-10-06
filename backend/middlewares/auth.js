import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';

import {User} from '../models/index.js';

export const protect = asyncHandler(async(req, res, next) => {
  let token
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1]
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
      const user = await User.findById(decodedToken.id).select('-password')
      req.user = user
      next();
    } catch(error) {
      console.log(error)
      res.status(401)
      throw new Error('Not authorized, no valid token')
    }
  }
  if(!token) {
    res.status(401)
    throw new Error('Not authorized, no valid token')
  }
})