import React from 'react';

export interface Props {
    title: string
}

const Header = (props: Props) => {
    return(
        <div>{ props.title }</div>
    );
};

export default Header;
