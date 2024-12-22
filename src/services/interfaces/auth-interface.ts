export interface ILogin {
  username: string;
  email: string;
  phone: string;
  role: string;
  isVerified: boolean;
  refreshToken: string;
  _id: string;
  __v: number;
  image: string;
}

export interface ILoginResponse {
  status: "success" | "error";
  data: ILogin;
}

export interface IRegister {
  username: string;
  email: string;
  phone: string;
  role: string;
  isVerified: boolean;
  _id: string;
  __v: number;
}

export interface IRegisterResponse {
  status: "success" | "error";
  data: IRegister;
}

export interface ILogoutResponse {
  message: string;
}

export interface IGenerateOTPCodeResponse {
  message: string;
}

export interface IVerificationAccountResponse {
  message: string;
}

export interface IRefreshToken {
  username: string;
  email: string;
  phone: string;
  role: string;
  isVerified: boolean;
  refreshToken: string;
  image: string;
  _id: string;
  __v: number;
}

export interface IRefreshTokenResponse {
  status: "success" | "error";
  data: ILogin;
}
