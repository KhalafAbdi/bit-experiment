import React, { FC, ReactNode } from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';
import { styled } from '@mui/material';

export interface ButtonProps {
  size?: MuiButtonProps['size'],
  variant?: MuiButtonProps['variant'],
  disabled?: boolean,
  children: ReactNode
  onClick: () => void 
};

const ContainedButton = styled(MuiButton)(({ theme }) => ({
  background: '#FF7973',
  padding: '8px 16px',
  minWidth: 'unset',
  borderRadius: '24px',
  textTransform: 'unset',
  '&:hover': {
    backgroundColor: '#007A78',
  },
  '&:disabled': {
    backgroundColor: '#F4F6F6',
    color: '#859494'
  },

}));


export const Button: FC<ButtonProps & MuiButtonProps> = ({size, variant, children, disabled, ...props}: ButtonProps & MuiButtonProps) => {
  if(variant === 'contained'){
    return (
      <ContainedButton size={size} variant={variant} disabled={disabled} {...props}>
        {children}
      </ContainedButton>
    );
  }

  return (
    <MuiButton size={size} variant={variant} disabled={disabled} {...props}>
      {children}
    </MuiButton>
  );
}
