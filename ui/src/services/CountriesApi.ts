import axios from "axios";
import { BASE_URL } from "../constants/services";

const _routes = {
  countries: (name: string) => `${BASE_URL}country?value=${name}`,
};

export class CountriesApi {
  static async getCountries(name: string): Promise<Country[]> {
    const { data } = await axios.get(_routes.countries(name));
    return data as Country[];
  }
}
