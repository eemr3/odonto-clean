import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';
import Treatment from './Treatment';

class Patient extends Model {
  public id: number;
  public name: string;
  public email: string;
  public phone: string;
  public document: string;
}

Patient.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    email: {
      type: STRING,
      allowNull: false,
    },
    phone: {
      type: STRING,
      allowNull: false,
    },
    document: {
      type: STRING,
      unique: true,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'patients',
    timestamps: false,
  },
);

Treatment.belongsTo(Patient, { foreignKey: 'patientId', as: 'treatments' });

Patient.hasMany(Treatment, { foreignKey: 'patientId', as: 'treatments' });

export default Patient;
