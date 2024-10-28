// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import { registerPlugins } from './plugins';


const app = createApp(App); // Criação da instância da aplicação Vue

// Registrar plugins (incluindo o router)
registerPlugins(app);

// Montar a aplicação
app.mount('#app');


