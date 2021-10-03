import {useState} from "react";

export const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const [isTouched, setIsTouched] = useState(false);
  
  const isValid = !!value || !isTouched;

  const handleInputValue = (e) => {
    const { value } = e.target;
    setValue(value);
  };


  const resetFieldState = ()=>{
    setIsTouched(false);
    setValue(defaultValue);
  }

  const onBlurHandle = () =>{
    setIsTouched(true);
  }

  return {
    value,
    isValid,
    handleInputValue,
    onBlurHandle,
    resetFieldState
  };
};
