import { ChangeEvent } from "react";
import style from './input.module.css'

interface MyInputProps {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  required?: boolean;
}

const MyInput = ({ type, placeholder, name, value, onChange, label, required }: MyInputProps) => {
  return (
    <div className={style.my_input_container}>
      <label className={style.my_input_label} >{label}</label>
      <input
       className={style.my_input_field}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default MyInput;
