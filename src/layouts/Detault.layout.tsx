import React from 'react';
import {PageTitle} from '../components/ui/PageTitle';
import {PageCopyright} from '../components/ui/PageCopyright';
import {author} from '../../package.json';
import {useLocales} from '../hooks/useLocales';

export const DefaultLayout: React.FC<{}> = ({children}): JSX.Element => {

    const {locales} = useLocales();

    return <>
        <PageTitle info={locales.appTitlePre}
                   title={locales.appTitle}
                   subTitle={locales.appSubTitle}/>
        <PageCopyright author={author}/>
        <div className="default-layout">
            <div className="default-layout-container p-4 shadow-lg">
                {children}
            </div>
        </div>
    </>;
};