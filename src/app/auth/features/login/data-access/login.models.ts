export interface LoginPayloadInterface {
  username: string;
  password: string;
}

export interface LoginResInterface {
  name: string;
  email: string;
  role: string;
}

export const LoggedInUser: LoginResInterface = {
  name: 'Joe Seph',
  email: 'joseph.seph@gmail.com',
  role: 'admin',
};
