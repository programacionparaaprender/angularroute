
dotnet new reactredux -o ReactRedux

dotnet new sln

dotnet add reference .\pro\pro.csproj


npm ls | select-string typescript

npm install -g react-native-cli


redux-persist
https://stackoverflow.com/questions/48514147/rnredux-persist-autorehydrate-is-not-a-function
https://www.npmjs.com/package/redux-persist


// configureStore.js
 
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
import rootReducer from './reducers'
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}

//otro archivo

import { PersistGate } from 'redux-persist/integration/react'
 
// ... normal setup, create store and persistor, import components etc.
 
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootComponent />
      </PersistGate>
    </Provider>
  );
};