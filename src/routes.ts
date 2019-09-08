import Login from './screens/Login/Login.vue';
import NotFound from './screens/NotFound/NotFound.vue';
import Cadastro from './screens/Cadastro/Cadastro.vue';

export const routes = [
    { path: '/', component: Login, meta: { authRequired: false } },
    { path: '/cadastro', component: Cadastro, meta: { authRequired: false } },
    { path: '**', component: NotFound, meta: { authRequired: false } },
];
