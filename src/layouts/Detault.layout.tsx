import React, {useContext} from "react";
import {PageTitle} from "../components/ui/PageTitle";
import {PageCopyright} from "../components/ui/PageCopyright";
import {author} from "../../package.json";
import {LocalizationType} from "../types/LocalizationType";
import {LocalizationContext} from "../index";

export const DefaultLayout: React.FC<{}> = ({children}): JSX.Element => {

    const locales = useContext<LocalizationType>(LocalizationContext);

    return <>
        <PageTitle info='Not another'
                   title={locales.appName}
                   subTitle={"by Mateusz Ozog"}/>
        <PageCopyright author={author}/>
        <div className='container min-vh-100 d-flex align-items-center'>
            <div className='default-layout-container'>

                {children}
            </div>
        </div>
    </>;
};