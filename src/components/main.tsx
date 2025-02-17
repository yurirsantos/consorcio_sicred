import React from 'react'
import 'animate.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '@/redux/store'
import { Toaster } from 'react-hot-toast'
import { MainType } from '@/types/MainType'
import { Loading } from './Loading'

export function Main(props: MainType) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className={props.extraClass}>
          <Loading loading={props.loading}>
            <Toaster position="top-right" />
            {props.children}
          </Loading>
        </div>
      </PersistGate>
    </Provider>
  )
}
