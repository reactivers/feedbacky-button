import { useContext } from "react";
import FeedbackModalContainerContext from "./context";

const useFeedbackModal = () => useContext(FeedbackModalContainerContext);
export default useFeedbackModal;