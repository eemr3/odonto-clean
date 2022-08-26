import User from '../database/models/User';

const createNewUser = async (data: any) => {
  const userExist = await User.findOne({ where: { email: data.email } });

  if (userExist) {
    throw new Error('User already exists');
  }

  const user = await User.create(data);

  return user;
};

export default {
  createNewUser,
};
