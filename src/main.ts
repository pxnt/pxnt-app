import { createApp } from 'vue'
import './style.css'
import App from '~/App.vue'
import { createPinia } from 'pinia'
import useRootStore from '~/stores/root'

const pinia = createPinia()

const app = createApp(App)

app.use(pinia)

const rootStore = useRootStore()
rootStore.init()

app.mount('#app')
