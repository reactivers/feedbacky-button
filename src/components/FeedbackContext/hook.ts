import { useContext } from "react";
import FeedbackContext from "./context";

const useFeedback = () => useContext(FeedbackContext);

export default useFeedback;
