import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';

import {User} from '../models/index.js'
import {generateToken} from '../utils/index.js'

export const authuser = asyncHandler(async(req, res) => {
  const {email, password} = req.body;

  const user = await User.findOne({email});

  if(user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    })
  } else {
    res.status(401)
    throw new Error('Invalid Credentials')
  }
})

export const getProfile = asyncHandler(async (req, res) => {
  const user = req.user
  res.status(200).json({
    status: "Success",
    user
  })
})

export const createUser = asyncHandler(async(req, res) => {
  const {name, email, password, isAdmin} = req.body;

  const createdUser = await User.create({
    name,
    email,
    password,
    isAdmin: isAdmin ? isAdmin : false
  })

  res.status(201).json({
    status: 'User Created',
    user: createdUser
  })
})