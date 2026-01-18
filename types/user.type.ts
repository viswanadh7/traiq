export type TSignUp = {
  name: string;
  email: string;
  password: string;
};

export type TSignIn = {
  email: string;
  password: string;
};

export enum AuthError {
  USER_ALREADY_EXISTS = "user_already_exists",
  INVALID_CREDENTIALS = "invalid_credentials",
}
