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
};
