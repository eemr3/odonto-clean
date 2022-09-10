import { DATEONLY, DECIMAL, INTEGER, Model } from 'sequelize';
import db from '.';

class TreatmentDateValue extends Model {
  public id: number;
  public paymentMethod: string;
  public installmentAmount: number;
  public valueOfPlots: number;
  public installmentDate: string;
  public treatmentId: number;
}

TreatmentDateValue.init(
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
    installmentDate: {
      type: DATEONLY,
      allowNull: false,
    },
    treatmentId: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'treatment_date_values',
    timestamps: false,
  },
);

export default TreatmentDateValue;
