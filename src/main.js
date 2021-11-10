import { createApp } from 'vue'
import App from './App.vue'

// 1º - importamos o framework primevue através desta linha de código
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

// 1°.2 - importar estilos de primevue
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'

const app = createApp(App)
// 2º - depois de importar,usamos .use para registrar e utilizar a importação feita
app.use(PrimeVue)
// 3º - registrar componentes
app.component('Button', Button)
app.component('InputText', InputText)

app.mount('#app')