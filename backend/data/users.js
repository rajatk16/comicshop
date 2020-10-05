import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Rajat Sudagade',
    email: 'rajat.sudagade@gmail.com',
    password: bcrypt.hashSync('goldtree9', 10),
    isAdmin: true
  }
]

export default users;