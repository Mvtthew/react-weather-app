import React from "react";
import {PageTitle} from "../components/ui/PageTitle";

export const DefaultLayout: React.FC<{}> = ({children}): JSX.Element => {
    return <>
        <PageTitle info='Not another' title='Weather app' subTitle={'by Mateusz Ozog'}/>
        <div className='container min-vh-100 d-flex align-items-center'>
            <div className='default-layout-container'>

                {children}
            </div>
        </div>
    </>
}