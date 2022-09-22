import classNames from "classnames";
import { FC, MouseEvent, PropsWithChildren, useEffect, useState } from "react";
import FeedbackModalContainerProvider from "./provider";
import { IFeedbackModalContainerProps } from "./types";

const FeedbackModalContainer: FC<PropsWithChildren<IFeedbackModalContainerProps>> = ({
    show,
    onClose,
    showModal,
    children
}) => {
    const [closing, setClosing] = useState(false);
    const preventClose = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    useEffect(() => {
        if (!show) setClosing(false);
    }, [show])

    const startClose = () => {
        setClosing(true);
        setTimeout(() => {
            onClose()
        }, 400);
    }

    if (!show) return null;

    return (
        <div className={classNames("fixed inset-0 flex items-center justify-center", {
            "backdrop-fade-in": !closing,
            "backdrop-fade-out": closing,
        })} onClick={startClose}>
            <div
                onClick={preventClose}
                className={classNames("transition-all", {
                    "feedbacky-modal-in": !closing,
                    "feedbacky-modal-out": closing,
                })}>
                <FeedbackModalContainerProvider
                    closeModal={startClose}
                    showModal={showModal}
                    show={show}
                >
                    {children}
                </FeedbackModalContainerProvider>
            </div>
        </div>
    )
}

export default FeedbackModalContainer;