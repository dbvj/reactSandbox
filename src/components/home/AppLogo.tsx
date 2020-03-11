import React, { useState } from 'react';
import logo from './images/logo.svg';

const cbtLogo = 'https://www.complaintsboard.com/img/business/123255/900x900/cbt-nuggets.png';
const chromeLogo = 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Chrome_icon_%28September_2014%29.svg';
const imageUrls = [logo, cbtLogo, chromeLogo];

export const AppLogo = (props: any) => {
    const [isReactLogo, setIsReactLogo] = useState(true);
    const [currentImageUrl, setCurrentImageUrl] = useState(0);

    const { logoAlt } = props;

    const swapLogo = () => {
        const length = imageUrls.length;
        let newIndex = currentImageUrl + 1;
        newIndex < length ? setCurrentImageUrl(newIndex) : setCurrentImageUrl(0);
    };

    return (
        <>
            <img src={imageUrls[currentImageUrl]} className="App-logo" alt={logoAlt} onClick={() => swapLogo()} />
        </>
    );
};
