import Login from './screens/Login/Login.vue';
import NotFound from './screens/NotFound/NotFound.vue';
import Cadastro from './screens/Cadastro/Cadastro.vue';

export const routes = [
    { path: '/study-system-with-vue/', component: Login, meta: { authRequired: false } },
    { path: '/study-system-with-vue/cadastro', component: Cadastro, meta: { authRequired: false } },
    { path: '/study-system-with-vue/**', component: NotFound, meta: { authRequired: false } },
];
