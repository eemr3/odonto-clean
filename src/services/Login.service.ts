import { compareSync } from 'bcryptjs';
import User from '../database/models/User';
import { errorBase } from '../utils/errorBase';
import { generateToken } from '../auth/token';

type Tokne = {
  token: string;
};

const signIn = async (email: string, password: string): Promise<Tokne> => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw errorBase(403, 'E-mail or password incorrect');
  }

  const decryptPassword = compareSync(password, user.password);
  console.log(decryptPassword);

  if (!decryptPassword) {
    throw errorBase(403, 'E-mail or password incorrect');
  }

  const token = generateToken(user.name, user.email);

  return { token };
};

export default {
  signIn,
};
