import React from 'react';

import './Button.css';
import { classNames, parseBgClassNames } from '@utils/classname-utils';
import Header from '@utils/Header';

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
    return (
        <div className={classNames('text-3xl font-bold underline', 'text-green-600', parseBgClassNames('bg-black'))} >
            <Header title={ props.label } />
      Hello world!
        </div>
    );
};

export default Button;
