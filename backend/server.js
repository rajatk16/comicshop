import dotenv from 'dotenv';
import express from 'express';
import colors from 'colors';

dotenv.config();
import connectDB from './config/db.js';
import comicRoutes from './routes/comics.js';
import {notFound, errorHandler} from './middlewares/error.js';

connectDB();

const server = express();


server.use('/api/comics', comicRoutes)

server.use(notFound)
server.use(errorHandler)

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.yellow.bold))