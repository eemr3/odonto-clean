import { DATEONLY, DECIMAL, INTEGER, Model, STRING } from 'sequelize';
import db from '.';
import Patient from './Patient';
import Procedure from './Procedure';
// import OtherModel from './OtherModel';

class PatientProcedure extends Model {
  public id: number;
  public title: number;
  public price: number;
}

PatientProcedure.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    patienteId: {
      type: INTEGER,
      allowNull: false,
      references: {
        model: 'patients',
        key: 'id',
      },
    },
    procedureId: {
      type: INTEGER,
      allowNull: false,
      references: {
        model: 'procedures',
        key: 'id',
      },
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
Patient.belongsToMany(Procedure, { as: 'groups', through: 'patient_procedures' });
Patient.belongsToMany(Patient, { as: 'items', through: 'patient_procedures' });

export default PatientProcedure;
