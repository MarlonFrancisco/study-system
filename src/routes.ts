import Login from './screens/Login/Login.vue';
import NotFound from './screens/NotFound/NotFound.vue';
import Cadastro from './screens/Cadastro/Cadastro.vue';
import Home from './screens/Home/Home.vue';
import MyAccount from './screens/MyAccount/MyAccount.vue';
import Subjects from './screens/Subjects/Subjects.vue';
import Exams from './screens/Exams/Exams.vue';
import WhoAre from './screens/WhoAre/WhoAre.vue';
import Ensino from './screens/Ensino/Ensino.vue';
import Lessons from './screens/Lessons/Lessons.vue';
import ContactUs from './screens/contactus/ContactUs.vue';
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
        path: '/study-system-with-vue/ensino',
        component: Ensino,
        meta: { authRequired: true },
    },
    {
        path: '/study-system-with-vue/vestibulares',
        component: Exams,
        meta: { authRequired: true },
    },
    {
        path: '/study-system-with-vue/quemsomos',
        component: WhoAre,
        meta: { authRequired: true },
    },
    {
        path: '/study-system-with-vue/materias',
        component: Subjects,
        meta: { authRequired: true },
    },
    {
        path: '/study-system-with-vue/lessons',
        component: Lessons,
        meta: { authRequired: true },
    },
    {
        path: '/study-system-with-vue/faleconosco',
        component: ContactUs,
        meta: { authRequired: true },
    },
    {
        path: '/study-system-with-vue/**',
        component: NotFound,
        meta: { authRequired: false },
    },
];
