import React from "react";

interface Props {
    text: any;
    heading: any;
}

export const DuotoneHeading: React.FC<Props> = ({heading, text}): JSX.Element => {
    return <>
        <h3 className='opacity-75 mb-0 fw-bold'>{text}</h3>
        <h1 className='fw-bolder'>{heading}</h1>
    </>;
};