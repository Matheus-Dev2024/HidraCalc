/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

// Importação dos componentes
const Explicacao = () => import('@/components/Explicacao.vue');
const Calc = () => import('@/components/Calc.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...routes, // Rotas automáticas
    {
      path: '/',
      name: 'Calc',
      component: Calc,
    },
    {
      path: '/explicacao',
      name: 'Explicacao',
      component: Explicacao,
    },
  ],
})

// Workaround para erro de importação dinâmica
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error');
      localStorage.setItem('vuetify:dynamic-reload', 'true');
      location.assign(to.fullPath);
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err);
    }
  } else {
    console.error(err);
  }
});

// Limpar item do localStorage após o roteador estar pronto
router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload');
});

export default router;
