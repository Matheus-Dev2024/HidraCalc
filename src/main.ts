// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import { registerPlugins } from './plugins';

const app = createApp(App);

// Registrar plugins (incluindo o router)
registerPlugins(app);

// Montar a aplicação
app.mount('#app');
