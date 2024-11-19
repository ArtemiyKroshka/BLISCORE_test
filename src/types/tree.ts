export interface Employee {
  name: string;
  age: number;
  salary: number;
  managerId: string;
}

export interface Shop {
  name: string;
  shopId: string;
  children: Employee[];
}

export interface City {
  name: string;
  cityId: string;
  children: Shop[];
}
