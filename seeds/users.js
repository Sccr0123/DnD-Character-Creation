const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'soulslurpee',
    email: 'soulslurpee@gmail.com',
    password: 'password123'
  },
  {
    username: 'BKWes',
    email: 'BKWes@gmail.com',
    password: 'password123'
  },
  {
    username: 'Sccr0123',
    email: 'Sccr0123@gmail.com,',
    password: 'password123'
  },
  {
    username: 'jolson2811',
    email: 'jolson2811@gmail.com,',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
