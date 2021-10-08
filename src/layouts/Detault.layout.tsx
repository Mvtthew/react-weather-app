import React from "react";
import {PageTitle} from "../components/ui/PageTitle";
import {PageCopyright} from "../components/ui/PageCopyright";
import {author} from "../../package.json";
import {useLocales} from "../hooks/useLocales";

export const DefaultLayout: React.FC<{}> = ({children}): JSX.Element => {

    const locales = useLocales();

    const subtitle = `${locales.by} ${author}`;

    return <>
        <PageTitle info={locales.appTitlePre}
                   title={locales.appTitle}
                   subTitle={subtitle}/>
        <PageCopyright author={author}/>
        <div className='container min-vh-100 d-flex align-items-center'>
            <div className='default-layout-container'>

                {children}
            </div>
        </div>
    </>;
};