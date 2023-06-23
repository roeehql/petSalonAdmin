import { ChangeEvent, useState } from 'react';

interface UseInputResult {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSelect: (e:ChangeEvent<HTMLSelectElement>) =>void;
  reset: () => void;
}

const useInput = (initialValue: string): UseInputResult => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSelect = (e:ChangeEvent<HTMLSelectElement>)=>{
    setValue(e.target.value)
  }
  const reset = () => {
    setValue(initialValue);
  };

  return { value, onChange: handleChange, handleSelect, reset };
};

export default useInput;
