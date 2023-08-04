interface IFeedbackModalContainerContext {
  show: boolean;
  closeModal: () => void;
  showModal: () => void;
}

interface IFeedbackModalContainerContextProps
  extends IFeedbackModalContainerContext {}

interface IFeedbackModalContainerProps {
  openAnimationClassName?: string;
  closeAnimationClassName?: string;
  transitionClassName?: string;
  show: boolean;
  onClose: () => void;
  showModal: () => void;
}

export type {
  IFeedbackModalContainerContext,
  IFeedbackModalContainerContextProps,
  IFeedbackModalContainerProps,
};
