export interface ICategory {
  name: string;
  image: string;
}

export interface ICategoryResponse {
  message: string;
  data: ICategory[];
}
