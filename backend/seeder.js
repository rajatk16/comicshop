import mongoose from 'mongoose';
import dotenv from 'dotenv';
import color from 'colors';

import users from './data/users.js'
import comics from './data/comics.js';
import User from './models/users.js';
import Comic from './models/comics.js';
import Order from './models/orders.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Comic.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleComics = comics.map(comic => {
      return {
        ...comic,
        user: adminUser
      }
    })

    await Comic.insertMany(sampleComics);

    console.log('Data imported!'.green.inverse)
  } catch (error) {
    console.log(`Error: ${error}`.red.bold);
    process.exit(1);
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Comic.deleteMany();
    await User.deleteMany();

    console.log('Data destroyed!'.red.inverse)
  } catch (error) {
    console.log(`Error: ${error}`.red.bold);
    process.exit(1);
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else if (process.argv[2] === '-i') {
  importData()
}