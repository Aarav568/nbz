import userReducer from './user/user.reducers'
import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import HomePageReducer from './homepage/homepage.reducers'
import cartReducer from './cart/cart.reducer'

const rootReducer = combineReducers({
    user: userReducer,
    homepage: HomePageReducer,
    cart: cartReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer