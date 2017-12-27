import { createStore ,applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import thunkMiddleware from 'redux-thunk';

export default function configureStore(initialState) {
    const store = createStore(
    	rootReducer, 
    	initialState,
    	applyMiddleware(thunkMiddleware),
        // 触发 redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )
    return store
}