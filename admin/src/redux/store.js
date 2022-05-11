import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'

import adminReducer from './reducers/adminReducers'
import productReducer from './reducers/productReducers'
import usersReducer from './reducers/usersReducers'
import orderReducers from './reducers/orderReducers'

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const appReducer = combineReducers({
    admin: adminReducer,
    products: productReducer,
    users: usersReducer,
    orders: orderReducers
});

const rootReducer = (state, action) => {
    if (action.type === 'admin/logout') {
        storage.removeItem('persist:root');
        localStorage.removeItem('adminToken');
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
});

export let persistor = persistStore(store);