export type UserInput = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type FormErrors = {
  email: string;
  password: string;
  confirmPassword: string;
  network: string;
  general: string;
  successMessage: string;
};
export type SigninErrors = {
  email: string;
  password: string;
  network: string;
  general: string;
  successMessage: string;
};
export type SignInput = {
  email: string;
  password: string;
};
