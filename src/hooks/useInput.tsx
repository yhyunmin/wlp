import { useState, useCallback, ChangeEventHandler } from "react";
import { useInputType } from "../components/Login";

const useInput = (i: string): useInputType => {
  const [value, setValue] = useState(i);
  const handler: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
};
export default useInput;
