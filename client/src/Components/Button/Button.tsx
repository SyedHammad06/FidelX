import React from 'react';
import './Button.scss';

interface Props {
  text: string;
  size: 'small' | 'large';
  to?: string;
  type?: 'button' | 'reset' | 'submit';
}

export const Button: React.FC<Props> = ({
  text,
  size,
  to,
  type,
}): JSX.Element => {
  return (
    <button
      type={type ? type : 'button'}
      className={
        size === 'small' ? 'Button Button__small' : 'Button Button__large'
      }
    >
      <a href={to}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          <path d='M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z' />
        </svg>
        <span>{text}</span>
      </a>
    </button>
  );
};
