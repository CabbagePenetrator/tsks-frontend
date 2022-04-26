import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import api from './api'

createApp(App).provide('$api', api).mount('#app')
