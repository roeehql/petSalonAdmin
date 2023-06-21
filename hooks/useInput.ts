import { useState } from 'react';

interface UseInputResult {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
}

const useInput = (initialValue: string): UseInputResult => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue(initialValue);
  };

  return { value, onChange: handleChange, reset };
};

export default useInput;
