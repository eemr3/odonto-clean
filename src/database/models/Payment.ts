import { DataTypes, DATEONLY, DECIMAL, INTEGER, Model, STRING } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class Payment extends Model {
  public id: number;
  public paymentMethod: number;
  public installmentAmount: number;
  public valueOfPlots: number;
  public totalPayment: number;
  public startDate: Date;
  public endDate: Date;
  public patientId: number;
}

Payment.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    paymentMethod: {
      type: STRING,
      allowNull: false,
    },
    installmentAmount: {
      type: INTEGER,
      allowNull: false,
    },
    valueOfPlots: {
      type: DECIMAL(5, 2),
      allowNull: false,
    },
    totalPayment: {
      type: DECIMAL(5, 2),
      allowNull: false,
    },
    startDate: {
      type: DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    endDate: {
      type: DATEONLY,
    },
    patientId: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    // ... Outras configs
    underscored: true,
    sequelize: db,
    modelName: 'payments',
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
