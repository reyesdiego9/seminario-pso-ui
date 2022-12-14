import { IconButton, SvgIconTypeMap, Tooltip } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface ButtonActionProps {
  onClick?: any;
  title: string;
  variant: 'contained' | 'outlined' | 'text';
  color: 'primary' | 'secondary' | 'warning';
  size: 'large' | 'medium' | 'small';
  IconButton: JSX.Element;
}

const ButtonAction = (props: ButtonActionProps) => {
  const { onClick, title, variant, color, size, IconButton } = props;
  return (
    <>
      <Tooltip title={title}>
        <Button onClick={onClick} variant={variant} color={color} size={size}>
          {IconButton}
        </Button>
      </Tooltip>
    </>
  );
};

export default ButtonAction;
