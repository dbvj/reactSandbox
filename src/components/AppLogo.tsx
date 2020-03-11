import React from 'react';
import logo from './logo.svg';

export const AppLogo = (props: any) => {
    const { logoAlt, isLogo } = props;
    return (
        <>
            {/*<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">*/}
            <img src={logo} className="App-logo" alt={logoAlt} onClick={() => console.log('Logo is: ', isLogo.toString())} />
            {/*</a>*/}
        </>
    );
};
