import { useEffect, useState } from "react";

const useCountries = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
  
    useEffect(() => {
      const fetchCountries = async () => {
        try {
          const response = await fetch('https://restcountries.com/v3.1/all');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();

          setCountries(data.map((country: any)=>({
              value: country.cca2,
              label: country.name.common,
              flag: country.flag,
              latlng: country.latlng,
              region: country.region
          })))
          setLoading(false);
        } catch (error) {
          setError("Error fetching data!");
          setLoading(false);
        }
      };

      fetchCountries();

    }, []); 
  
    const getAll:any = ()=> countries;

    const getByValue = (value: string) => {
        return countries.find((item:any) => item.value === value)
    }

    return { countries, loading, error, getAll, getByValue };
};

export default useCountries;
