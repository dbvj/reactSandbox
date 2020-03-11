import React from 'react';

/** set image url here? */
const logo =
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fuser%2Fcbtnuggets&psig=AOvVaw3QxEOlYLeyPqZ1kXwVzlgX&ust=1584032320371000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiu-q_ykugCFQAAAAAdAAAAABAD';

export const AppLogo = (props: any) => {
    const { logoAlt, isLogo } = props;
    return (
        <>
            <img src={logo} className="App-logo" alt={logoAlt} onClick={() => console.log('Logo is: ', isLogo.toString())} />
        </>
    );
};
