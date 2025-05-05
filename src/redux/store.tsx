import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import addUserSlice  from './slice'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'],
  }

const rootReducer=combineReducers({
    user:addUserSlice


})



  const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredPaths: ['pwa.event'],
            ignoredActions: ['pwa/addDeferredPrompt', FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
        devTools: true
  })




  export const persistor=persistStore(store)