import { hashSync } from 'bcryptjs';
import User from '../database/models/User';

import { errorBase } from '../utils/errorBase';
import { IUser } from './interface/User.interface';

const createNewUser = async ({ name, email, password }: IUser): Promise<User> => {
  const userExist = await User.findOne({ where: { email } });

  if (userExist) {
    throw errorBase(409, 'User already exists');
  }

  const encryptedPassword = hashSync(password, 10);
  const user = await User.create({ name, email, password: encryptedPassword });

  return user;
};

export default {
  createNewUser,
};
