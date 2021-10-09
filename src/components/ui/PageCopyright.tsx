import React from 'react';
import moment from 'moment';

interface Props {
    author: string;
}

export const PageCopyright: React.FC<Props> = ({author}): JSX.Element => {

    const year = moment().year();

    return <p className="page-copyright text-center p-xl-5 p-3">
        &copy; {year} {author}
    </p>;
};
