/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
import Guard from '@/services/middeware.js'

// Importação dos componentes
const Explicacao = () => import('@/components/Explicacao.vue');
const Calc = () => import('@/components/Calc.vue');
const LoginForm = () => import('@/components/LoginForm.vue');
const RegisterForm = () => import('@/components/RegisterForm.vue');

// Definição das rotas
const appRoutes = [
  {
    path: '/',
    name: 'Calc',
    component: Calc,
    beforeEnter: Guard.auth,

  },
  {
    path: '/explicacao',
    name: 'Explicacao',
    component: Explicacao,

  },
  {
    path: '/login',
    name: 'LoginForm',
    component: LoginForm,
  },
  {
    path: '/registro',
    name: 'RegisterForm',
    component: RegisterForm,
  },
];

// Criação do roteador
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...routes, // Rotas automáticas
    ...appRoutes // Suas rotas definidas
  ],
});

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
