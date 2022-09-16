import FeedbackModalContainer from "components/FeedbackModalContainer";
import { FC, useState } from "react";
import { IFeedbackCore } from "./types";

const FeedbackCore: FC<IFeedbackCore> = (props: IFeedbackCore) => {
    const [showModal, setShowModal] = useState(false);

    const onFeedbackButtonClick = () => {
        setShowModal(true)
    }

    const onFeedbackModalClose = () => {
        setShowModal(false)
    }

    return (
        <>
            <props.feedbackButton
                {...props.feedbackButtonProps}
                onClick={onFeedbackButtonClick}
            />
            <FeedbackModalContainer
                show={showModal}
                onClose={onFeedbackModalClose}>
                <props.feedbackModal {...props.feedbackModalProps}
                    show={showModal} />
            </FeedbackModalContainer>
        </>
    )
}

export default FeedbackCore;