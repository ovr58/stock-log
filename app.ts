import express from 'express';
import sequelize from './config/database';
import routes from './routes/index';

const app = express();
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3001;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});