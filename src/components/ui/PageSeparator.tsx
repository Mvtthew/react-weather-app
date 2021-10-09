import React from 'react';

interface Props {
    className?: string;
}

export const PageSeparator: React.FC<Props> = ({className}): JSX.Element => {
    return <div className={'w-100 border-bottom border border-dark ' + className}/>;
};