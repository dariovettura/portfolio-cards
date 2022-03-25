import '../styles/globals.css'
import { AnimatePresence ,AnimateSharedLayout} from "framer-motion";
import type { AppProps } from 'next/app'
import {Provider} from "react-redux"
import { store } from '../store/index'

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <div className="container">
    <AnimateSharedLayout  >
  <Component {...pageProps} />
  </AnimateSharedLayout>
  </div>
  </Provider>
}

export default MyApp
