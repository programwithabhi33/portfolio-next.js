"use client"
import { store } from '@/store'
import { Provider } from 'react-redux'

const ReduxProvider = (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}

export default ReduxProvider
