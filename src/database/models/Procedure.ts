import { DATEONLY, DECIMAL, INTEGER, Model, STRING } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class Procedure extends Model {
  public id: number;
  public title: number;
  public price: number;
}

Procedure.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: STRING,
      allowNull: false,
    },
    price: {
      type: DECIMAL(5, 2),
      allowNull: false,
    },
  },
  {
    // ... Outras configs
    underscored: true,
    sequelize: db,
    modelName: 'users',
    timestamps: false,
  },
);

/**
 * `Workaround` para aplicar as associations em TS:
 * Associations 1:N devem ficar em uma das instâncias de modelo
 * */

// OtherModel.belongsTo(Procedure, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Procedure, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// Procedure.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Procedure.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default Procedure;
