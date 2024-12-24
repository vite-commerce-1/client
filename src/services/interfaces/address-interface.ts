export interface IAddress {
  userId: string;
  detail: string;
  subDistrict: string;
  district: string;
  city: string;
  province: string;
  country: string;
  postalCode: string;
  defaultAddress: boolean;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  _id: string;
  __v: number;
}

export interface IAddressResponse {
  success: boolean;
  message: string;
  data: IAddress[] | IAddress;
}
