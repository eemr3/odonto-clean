import User from '../database/models/User';

export const createNewUser = async (data: any) => {
  const user = await User.create(data);

  return user;
};
