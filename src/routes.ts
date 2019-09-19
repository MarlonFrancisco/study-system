import Login from './screens/Login/Login.vue';
import NotFound from './screens/NotFound/NotFound.vue';
import Cadastro from './screens/Cadastro/Cadastro.vue';
import Home from './screens/Home/Home.vue';
import MyAccount from './screens/MyAccount/MyAccount.vue';
import Subjects from './screens/Subjects/Subjects.vue';
import Exams from './screens/Exams/Exams.vue';
import Reinforcement from './screens/Reinforcement/Reinforcement.vue';
import WhoAre from './screens/WhoAre/WhoAre.vue';

export const routes = [
    {
        path: '/study-system-with-vue/',
        component: Login,
        meta: { authRequired: false },
    },
    {
        path: '/study-system-with-vue/cadastro',
        component: Cadastro,
        meta: { authRequired: false },
    },
    {
        path: '/study-system-with-vue/home',
        component: Home,
        meta: { authRequired: true },
    },
    {
        path: '/study-system-with-vue/myaccount',
        component: MyAccount,
        meta: { authRequired: true },
    },
    {
        path: '/study-system-with-vue/disciplinas',
        component: Subjects,
        meta: { authRequired: true },
    },
    {
        path: '/study-system-with-vue/vestibulares',
        component: Exams,
        meta: { authRequired: true },
    },
    {
        path: '/study-system-with-vue/reforçoescolar',
        component: Reinforcement,
        meta: { authRequired: true },
    },
    {
        path: '/study-system-with-vue/quemsomos',
        component: WhoAre,
        meta: { authRequired: true },
    },
    {
        path: '/study-system-with-vue/**',
        component: NotFound,
        meta: { authRequired: false },
    },
];
