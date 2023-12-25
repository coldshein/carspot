import { manufacturers } from './../constants/constants';
export interface ICars {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}
export interface ISearchManufacturer {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface IFilters {
  manufacturer: string,
  year: number,
  fuel: string,
  limit: number,
  model: string,
}
