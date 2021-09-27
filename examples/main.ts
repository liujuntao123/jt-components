import { createApp } from 'vue'
import App from './App.vue'
import jtComponent,{version} from 'jt-components'
import 'jt-components/lib/style.css'

console.log(jtComponent,version)

createApp(App).use(jtComponent).mount('#app')
