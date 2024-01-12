import { useEffect, useState } from "react";
import { CountriesApi } from "../services/CountriesApi";
import { formatString, truncateString } from "../utils";

interface UseCountriesProps {
  name: string;
}

export const useCountries = ({ name }: UseCountriesProps) => {
  const [data, setData] = useState<Country[] | undefined>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    try {
      setIsLoading(true);
      let aux: Country[] = [];
      const response = await CountriesApi.getCountries(name);
      if (response?.length > 0) {
        response?.map((country: Country) => {
          aux.push({
            id: country.id,
            name: country.name,
            population: formatString(country.population),
            percentage_population: truncateString(
              country.percentage_population
            ),
          });
        });
        setData(aux);
      } else setData(response);
    } catch (e: any) {
      setData(undefined);
      setError(e);
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  return { data, isLoading, getCountries, error };
};
