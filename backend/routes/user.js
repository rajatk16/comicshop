import express from 'express';

import {authuser, getProfile, createUser} from '../controllers/index.js'
import {protect} from '../middlewares/index.js';

const router = express.Router();

router.post('/login', authuser)
router.route('/profile').get(protect, getProfile)
router.route('/signup').post(createUser)

export {router as userRoutes}