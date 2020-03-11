import React from 'react';
import { NavigationBar } from './NavigationBar';

interface ILayout {
    children: any;
}

export const Layout = ({ children }: ILayout) => {
    return (
        <>
            <NavigationBar />
            {children}
        </>
    );
};
