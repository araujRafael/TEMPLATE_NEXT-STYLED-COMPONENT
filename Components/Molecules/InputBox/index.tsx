import React, { InputHTMLAttributes } from 'react';
import { Input, InputWrapper } from './styles';

interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  // 
}

const InputBox: React.FC<InputBoxProps> = ({
  ...rest
}) => {
  return (
    <InputWrapper>
      <Input {...rest} />
    </InputWrapper>
  );
}

export default InputBox;