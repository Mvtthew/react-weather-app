import React from 'react';

interface Props {
    show: boolean;
    setShow: (state: boolean) => void;
}

export const PageModal: React.FC<Props> = ({
    show,
    setShow,
    children,
}): JSX.Element => {

    const closeModal = (): void => {
        setShow(false);
    };

    const modalShowClasses = (): string => {
        if (show) return ' show';
        return ' hide';
    };

    return <>
        <div className={'modal align-items-center d-flex justify-content-center' + modalShowClasses()}>
            <div className={'modal-body' + modalShowClasses()}>
                {children}
            </div>

            <div className="modal-close position-fixed cursor-pointer display-5 top-0 end-0 m-5" onClick={closeModal}>
                <i className="bx bx-x"/>
            </div>
        </div>
        <div className={'modal-backdrop' + modalShowClasses()}
             onClick={closeModal}>
        </div>
    </>;
};