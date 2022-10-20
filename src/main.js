import { createApp } from 'kdu'
import App from './App.kdu'
import router from './router'

createApp(App).use(router).mount('#app')
