import { DataTypes, DATEONLY, DECIMAL, INTEGER, Model, STRING } from 'sequelize';
import db from '.';

class Payment extends Model {
  public id: number;
  public title: string;
  public paymentMethod: string;
  public installmentAmount: number;
  public valueOfPlots: number;
  public totalPayment: number;
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

export default Payment;
