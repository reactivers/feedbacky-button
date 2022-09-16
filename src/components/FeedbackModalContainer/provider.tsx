import { FC, PropsWithChildren } from "react"
import FeedbackModalContainerContext from "./context"
import { IFeedbackModalContainerContextProps } from "./types"

const FeedbackModalContainerProvider: FC<PropsWithChildren<IFeedbackModalContainerContextProps>> = ({
    children,
    onClose
}) => {
    return (
        <FeedbackModalContainerContext.Provider value={{
            onClose
        }}>
            {children}
        </FeedbackModalContainerContext.Provider>
    )
}

export default FeedbackModalContainerProvider;