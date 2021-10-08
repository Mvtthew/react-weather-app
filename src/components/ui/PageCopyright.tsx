import React from "react";
import moment from "moment";

interface Props {
    author: string
}

export const PageCopyright: React.FC<Props> = ({author}): JSX.Element => {

    const year = moment().year();

    return <p className='position-fixed bottom-0 end-0 p-5'>
        &copy; {year} {author}
    </p>;
};
