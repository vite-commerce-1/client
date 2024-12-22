export interface ICurrentUser {
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

export interface ICurrentUserResponse {
  data: ICurrentUser;
}

export interface IUserUpdate {
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

export interface IUserUpdateResponse {
  message: string;
  data: IUserUpdate;
}
