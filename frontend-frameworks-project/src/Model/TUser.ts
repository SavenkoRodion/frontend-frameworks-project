export type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: TAddress;
  phone: string;
  company: TComapany;
};

export type TAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: TGeo;
};

export type TGeo = {
  lat: string;
  lng: string;
};

export type TComapany = {
  id: number;
  name: string;
  username: string;
  email: string;
};
