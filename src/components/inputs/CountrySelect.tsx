import React from 'react';
import Select from 'react-select'
import useCountries from '../../hooks/useCountries';

export type CountrySelectValue = {
    value: string,
    label: string,
    flag: string,
    latlng: number[],
    region: string
}

interface CountrySelectProps {
    value?: CountrySelectValue;
    onChange?: (value: CountrySelectValue) => void;
}
const CountrySelect: React.FC<CountrySelectProps> = ({value, onChange}) => {
  const { countries, loading, error } = useCountries();
  return (
    <div>
      <Select 
        placeholder="Anywhere"
        isClearable
        options={countries} />
    </div>
  )
};

export default CountrySelect;
