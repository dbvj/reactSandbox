import React, { useState } from 'react';
import logo from './logo.svg';

const urlLogo = 'https://www.complaintsboard.com/img/business/123255/900x900/cbt-nuggets.png';

export const AppLogo = (props: any) => {
    const [isReactLogo, setIsReactLogo] = useState(true);

    const { logoAlt } = props;

    return (
        <>
            <img src={isReactLogo ? logo : urlLogo} className="App-logo" alt={logoAlt} onClick={() => setIsReactLogo(!isReactLogo)} />
        </>
    );
};
