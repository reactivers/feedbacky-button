import { createContext } from "react";
import { IFeedbackContext } from "./types";

const FeedbackContext = createContext({} as IFeedbackContext);

export default FeedbackContext;
