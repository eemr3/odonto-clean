import { DATEONLY, DECIMAL, INTEGER, Model, STRING } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class Payment extends Model {
  public id: number;
  public payment_method: number;
  public installment_amount: number;
  public value_of_plots: number;
  public total_payment: number;
  public start_date: Date;
  public end_date: Date;
}

Payment.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    payment_method: {
      type: STRING,
      allowNull: false,
    },
    installment_amount: {
      type: INTEGER,
      allowNull: false,
    },
    value_of_plots: {
      type: DECIMAL(5, 2),
      allowNull: false,
    },
    total_payment: {
      type: DECIMAL(5, 2),
      allowNull: false,
    },
    start_date: {
      type: DATEONLY,
      allowNull: false,
    },
    end_date: {
      type: DATEONLY,
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

// OtherModel.belongsTo(Payment, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Payment, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// Payment.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Payment.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default Payment;
