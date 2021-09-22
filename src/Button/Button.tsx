import React, { FC } from 'react';
import { ButtonTypes, Appearance } from './types';
import classNames from 'classnames';
import './Button.scss';
// import { Typography, TypographyTextStyles } from '@/';

interface ButtonProps {
  /**
   * A button will have a default appearance of primary.
   */
  appearance?: Appearance;
  /**
   * A button will have an onClick function you can attach to any click handler function
   */
  onClick?: () => void;
  /**
   * A button can have a type attribute
   */
  type?: ButtonTypes;
  /**
   * A button can have various text styles
   */
  // textStyle?: TypographyTextStyles;
  /**
   * A button can be disabled
   */
  disabled?: boolean;
  /**
   * Additional class names will be included
   */
  className?: string;
  /**
   * Class names for text color
   */
  textColorClass?: string;
}

const Button: FC<ButtonProps> = ({
  appearance = 'primary',
  children,
  onClick,
  type = 'button',
  textStyle = 'M-bold',
  className = '',
  textColorClass = 'color--white',
  disabled = false,
}): JSX.Element => {
  const classPrefix = 'mlf-btn';
  const classes = classNames(
    classPrefix,
    className,
    appearance,
    textColorClass,
    {
      disabled: disabled,
    }
  );

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={classes}
    >
      {/* <Typography text={children} textAlign="center" textStyle={textStyle} /> */}
      {children}
    </button>
  );
};

export default Button;
