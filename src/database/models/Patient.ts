import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';
import Payment from './Payment';
// import OtherModel from './OtherModel';

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

Payment.belongsTo(Patient, { foreignKey: 'patientId', as: 'idPatient' });
// Payment.belongsTo(Patient, { foreignKey: 'awayTeam', as: 'teamAway' });

Patient.hasMany(Payment, { foreignKey: 'patientId', as: 'idPatient' });
// Patient.hasMany(Payment, { foreignKey: 'awayTeam', as: 'teamAway' });

export default Patient;
