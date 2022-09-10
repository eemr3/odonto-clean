import { DATEONLY, DECIMAL, INTEGER, Model, STRING } from 'sequelize';
import db from '.';
import TreatmentDateValue from './treatmentdatevalue';

class Treatment extends Model {
  public id: number;
  public title: string;
  public paymentMethod: string;
  public inCash: number;
  public startDate: string;
  public patientId: number;
}

Treatment.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    treatment: {
      type: STRING,
      allowNull: false,
    },
    paymentMethod: {
      type: STRING,
      allowNull: false,
    },
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
    modelName: 'treatments',
    timestamps: false,
  },
);

TreatmentDateValue.belongsTo(Treatment, {
  foreignKey: 'treatmentId',
  as: 'treatmentsValues',
});

Treatment.hasMany(TreatmentDateValue, {
  foreignKey: 'treatmentId',
  as: 'treatmentsValues',
});

export default Treatment;
