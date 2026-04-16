import { createApp } from 'vue'
import './global.css'
import './navigation.css'
import './main.css'
import './gallery.css'
import './features.css'
import './faq.css'
import './footer.css'
import App from './App.vue'
import About from './About.vue'
import Contact from './Contact.vue'

createApp(App).mount('#app')        
createApp(About).mount('#about')
createApp(Contact).mount('#contact')