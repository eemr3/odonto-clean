import { DataTypes, DATEONLY, DECIMAL, INTEGER, Model, STRING } from 'sequelize';
import db from '.';

class PaymentDateValue extends Model {
  public id: number;
  public paymentMethod: string;
  public installmentAmount: number;
  public valueOfPlots: number;
  public installmentDate: string;
  public paymentId: number;
}

PaymentDateValue.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    installmentAmount: {
      type: INTEGER,
      allowNull: false,
    },
    valueOfPlots: {
      type: DECIMAL(5, 2),
      allowNull: false,
    },
    // totalPayment: {
    //   type: DECIMAL(5, 2),
    //   allowNull: false,
    // },
    installmentDate: {
      type: DATEONLY,
      allowNull: false,
    },
    paymentId: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'payment_date_values',
    timestamps: false,
  },
);

export default PaymentDateValue;
