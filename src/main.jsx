import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)


// NOTES:
// in contextAPI we use property 'value' to provide the value to the child component, while in RTK we use property 'store' as value to refer the store.