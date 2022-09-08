import { DataTypes, DATEONLY, DECIMAL, INTEGER, Model, STRING } from 'sequelize';
import db from '.';
import PaymentDateValue from './paymentdatevalue';

class Payment extends Model {
  public id: number;
  public title: string;
  public paymentMethod: string;
  public inCash: number;
  public startDate: string;
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
    title: {
      type: STRING,
      allowNull: false,
    },
    paymentMethod: {
      type: STRING,
      allowNull: false,
    },
    // installmentAmount: {
    //   type: INTEGER,
    //   allowNull: false,
    // },
    // valueOfPlots: {
    //   type: DECIMAL(5, 2),
    //   allowNull: false,
    // },
    inCash: {
      type: DECIMAL(5, 2),
      allowNull: false,
    },
    startDate: {
      type: DATEONLY,
      allowNull: false,
    },
    patientId: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'payments',
    timestamps: false,
  },
);

PaymentDateValue.belongsTo(Payment, { foreignKey: 'paymentId', as: 'idPayment' });

Payment.hasMany(PaymentDateValue, { foreignKey: 'paymentId', as: 'idPayment' });

export default Payment;
