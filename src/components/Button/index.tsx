import React, { ButtonHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";
import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ComponentType<IconBaseProps>;
};

const Button: React.FC<ButtonProps> = ({ icon: Icon, ...rest }) => {
  return (
    <Container>
      <button type="button" {...rest}>
        {Icon && <Icon size={20} color="#8E8E8E" />}
      </button>
    </Container>
  );
};

export default Button;
