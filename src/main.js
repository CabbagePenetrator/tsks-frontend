import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import api from './api'
import router from './routes'

createApp(App).use(router).provide('$api', api).mount('#app')
