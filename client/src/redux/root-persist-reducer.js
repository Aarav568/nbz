import userReducer from './user/user.reducers'
import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import HomePageReducer from './homepage/homepage.reducers'
import cartReducer from './cart/cart.reducer'
import modalReducer from './modal/modal.reducer'

const rootReducer = combineReducers({
    user: userReducer,
    homepage: HomePageReducer,
    cart: cartReducer,
    modal: modalReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer