import React from "react";

interface Props {
    title: string | JSX.Element;
    info?: string | JSX.Element;
    subTitle?: string | JSX.Element;
}

export const PageTitle: React.FC<Props> = ({title, info, subTitle}): JSX.Element => {

    return <div className='position-fixed left-0 top-0 p-5'>
        {info && <h3 className='opacity-75 mb-0 fw-bold'>{info}</h3>}
        <h1 className='fw-bolder'>{title}</h1>
        {subTitle && <h6 className='opacity-75 mb-0 fw-bold'>{subTitle}</h6>}
    </div>;
};