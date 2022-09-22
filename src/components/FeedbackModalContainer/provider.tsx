import { FC, PropsWithChildren } from "react"
import FeedbackModalContainerContext from "./context"
import { IFeedbackModalContainerContextProps } from "./types"

const FeedbackModalContainerProvider: FC<PropsWithChildren<IFeedbackModalContainerContextProps>> = ({
    children,
    closeModal,
    showModal,
    show
}) => {
    return (
        <FeedbackModalContainerContext.Provider value={{
            closeModal,
            showModal,
            show
        }}>
            {children}
        </FeedbackModalContainerContext.Provider>
    )
}

export default FeedbackModalContainerProvider;