import userReducer from './user/user.reducers'
import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import HomePageReducer from './homepage/homepage.reducers'


const rootReducer = combineReducers({
    user: userReducer,
    homepage: HomePageReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['theme', 'user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer