interface IFeedbackModalContainerContext {
  show: boolean;
  closeModal: () => void;
  showModal: () => void;
}

interface IFeedbackModalContainerContextProps
  extends IFeedbackModalContainerContext {}

interface IFeedbackModalContainerProps {
  show: boolean;
  onClose: () => void;
  showModal: () => void;
}

export type {
  IFeedbackModalContainerContext,
  IFeedbackModalContainerContextProps,
  IFeedbackModalContainerProps,
};
