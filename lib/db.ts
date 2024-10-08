import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
  dialect: 'mysql',
});

export default sequelize;