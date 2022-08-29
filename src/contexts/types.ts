export interface SignInDataType {
  email: string;
  password: string;
}

export interface State {
  password: string;
  showPassword: boolean;
}

export interface IUser {
  token: string | undefined;
}
export interface IContext {
  signIn: ({ email, password }: SignInDataType) => void;
  logout: () => void;
  user: IUser;
}
