<template>
    <div>
        <v-app-bar app dense color="teal" elevation="1" style="justify-content: space-around">
            <v-app-bar-nav-icon color="white" @click="drawer = !drawer"></v-app-bar-nav-icon>
            
            <v-menu bottom left>
                <template v-slot:activator="{ on }">
                    <v-btn icon class="ml-auto" v-on="on">
                        <v-icon color="white">mdi-account</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item link>
                        <router-link to="/study-system-with-vue/myaccount">
                            <v-list-item-title>My account</v-list-item-title>
                        </router-link>
                    </v-list-item>
                    <v-list-item link @click="endSession">
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
        <Navigation :drawer="drawer" :items="items" @closeNavigation="state" :title="name"></Navigation>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Navigation from './../Navigation/Navigation.vue';
import { logout } from './../../../helpers/auth';
import navigationItems from './assets/navigation.json';
import api from '../../../service/api';
import { IUser } from '../../../typings/login';
@Component({
    components: {
        Navigation,
    },
})
export default class Header extends Vue {
    private drawer = false;
    private items = navigationItems.items;
    private name = '';

    public async created() {
        try {
            const res = await api.get<IUser>('/user');
            console.log(res);

            this.name = res.data.name;
        } catch (err) {
            this.$router.push('/study-system-with-vue');
        }
    }

    private state(value: boolean) {
        console.log(value);
    }

    private endSession() {
        logout();
        this.$router.push('/study-system-with-vue');
    }
}
</script>

<style>
</style>