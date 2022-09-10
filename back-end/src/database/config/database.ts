import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER || 'admin',
  password: process.env.DB_PASS || '12345678',
  database: process.env.DB_NAME || 'dofteo_db',
  host: process.env.DB_HOST || 'localhost',
  dialect: 'postgres',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = config;
