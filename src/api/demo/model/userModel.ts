export type LoginParams = {
  username: string;
  password: string;
};

export type LoginGetResultModel = {
  id: string;
  name: string;
  age: string;
};

export type UserListParams = {
  id: string;
};

export type UserListGetResultModel = {
  list: UserInfo[];
};

export interface UserInfo {
  id: string;
  name: string;
  age: Number;
  address: string;
  city: string;
  province: string;
  email: string;
  phone: string;
  regin: string;
  url: string;
  date: string;
}
