import Procedure from '../database/models/Procedure';

const createProcedure = async (data: any) => {
  const procedure = await Procedure.create(data);

  return procedure;
};

export default {
  createProcedure,
};
