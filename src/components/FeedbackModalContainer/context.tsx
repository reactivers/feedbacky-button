import { createContext } from "react";
import { IFeedbackModalContainerContext } from "./types";

const FeedbackModalContainerContext = createContext(
  {} as IFeedbackModalContainerContext,
);
export default FeedbackModalContainerContext;
