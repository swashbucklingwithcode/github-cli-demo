import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <button type="button">children</button>;
};

export default Button;
