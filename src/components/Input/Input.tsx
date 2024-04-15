import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // custom properties go here
  placeholder?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input({ placeholder, id, ...props }, ref) {
  return (
    <div className="input-wrapper">
      <input
        ref={ref}
        {...props}
        id={id}
        placeholder=" " // ! for styling
        autoComplete="off"
      />
      <label htmlFor={id}>{placeholder}</label>
    </div>
  );
});

export default Input;
