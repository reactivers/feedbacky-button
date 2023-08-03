import FeedbackModalContainer from "components/FeedbackModalContainer";
import { FC, useCallback, useState } from "react";
import { IFeedbackCore } from "./types";

const FeedbackCore: FC<IFeedbackCore> = (props: IFeedbackCore) => {
  const [show, setShow] = useState(false);

  const showModal = useCallback(() => {
    setShow(true);
  }, []);

  const hideModal = useCallback(() => {
    setShow(false);
  }, []);

  const onFeedbackButtonClick = () => {
    showModal();
  };

  const onFeedbackModalClose = () => {
    hideModal();
  };

  return (
    <>
      <props.feedbackButton
        {...props.feedbackButtonProps}
        onClick={onFeedbackButtonClick}
      />
      <FeedbackModalContainer
        show={show}
        showModal={showModal}
        onClose={onFeedbackModalClose}
      >
        <props.feedbackModal {...props.feedbackModalProps} />
      </FeedbackModalContainer>
    </>
  );
};

export default FeedbackCore;
