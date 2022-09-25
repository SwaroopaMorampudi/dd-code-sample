import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers'

const registerMiddleware = (): any[] => {
    // if (process.env.NODE_ENV !== 'production') {
    //     // eslint-disable-next-line @typescript-eslint/no-var-requires
    //     const { logger } = require('redux-logger')
    //     return [thunkMiddleware, logger]
    // }
    return [thunkMiddleware]
}

export const store = createStore(
    reducer,
    applyMiddleware(...registerMiddleware())
)
