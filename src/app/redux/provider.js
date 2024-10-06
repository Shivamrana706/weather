"use client"
import { Provider } from "react-redux"
import { Store } from "./store"

const ReduxProvider = ({ Children }) => {
    return (
        <Provider store={Store}>
            {Children}
        </Provider>
    )
}
export default ReduxProvider