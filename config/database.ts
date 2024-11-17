import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('DATABASE_URL is not defined');
}

const sequelize = new Sequelize(
  databaseUrl,
  {
    dialect: 'postgres',
  }
)

export default sequelize