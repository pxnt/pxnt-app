import { createApp } from 'vue'
import './style.css'
import App from '~/App.vue'
import { createPinia } from 'pinia'
import useRootStore from '~/stores/root'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

// Mount first to improve LCP
app.mount('#app')

// Defer non-critical initialization
requestIdleCallback(() => {
  const rootStore = useRootStore()
  rootStore.init()
})
