import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Action extends Model {}

Action.init({
    action_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    action: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    plu: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantityOnShelf: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantityInOrder: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    shopId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
  sequelize,
  modelName: 'Action',
});

export default Action;