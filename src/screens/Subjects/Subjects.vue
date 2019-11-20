<template>
    <div>
        <Header></Header>

        <v-content>
            <v-container>
                <v-row>
                    <v-col v-for="(item, index) of items" :key="index" md="3">
                        <v-card :loading="loading">
                            <v-img :src="item.image" max-height="165px">
                                <v-card-title
                                    class="align-end fill-height white--text"
                                    >{{ item.name }}</v-card-title
                                >
                            </v-img>
                            <v-card-text>{{ item.title }}</v-card-text>

                            <v-card-actions>
                                <v-btn
                                    icon
                                    title="Favoritar"
                                    :color="
                                        `${saves.indexOf(item.name) !== -1 &&
                                            'teal'}`
                                    "
                                    @click="
                                        favor(
                                            item.name,
                                            saves.indexOf(item.name) !== -1,
                                        )
                                    "
                                >
                                    <v-icon>mdi-heart</v-icon>
                                </v-btn>
                                <router-link
                                    :to="`/study-system-with-vue/lessons?matter=${item.name}&ensino=${ensino}`"
                                    style="text-decoration: none"
                                >
                                    <v-btn icon title="Visualizar"
                                        ><v-icon>mdi-import</v-icon></v-btn
                                    >
                                </router-link>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BottomNavigation from './../shared/BottomNavigation/BottomNavigation.vue';
import Header from './../shared/Header/Header.vue';
import subjects from './assets/subjects.json';
import api from '../../service/api';
import { ISubjects } from './../../typings/subsject';
import Toast from '../../helpers/Toast';
@Component({
    components: {
        Header,
        BottomNavigation,
    },
})
export default class Subjects extends Vue {
    private items = subjects.subjects;
    private loading = false;
    private saves = [];
    private ensino = '';

    public async created() {
        this.loading = true;
        this.ensino = this.$router.currentRoute.query.ensino as string;
        try {
            const subject = await api.get('/subject');
            this.saves = subject.data.map((data: ISubjects) => data.name);
            Toast.success('Favoritos carregado!', this);
        } catch (err) {
            Toast.error('Ops, tivemos um problema. Tente novamente!', this);
        }
        this.loading = false;
    }

    private async favor(name: string, isFavorite: boolean) {
        try {
            this.loading = true;
            let subject;
            if (!isFavorite) {
                subject = await api.post('/subject/add', {
                    name,
                });
                Toast.success('Materia favoritada!', this);
            } else {
                subject = await api.delete('/subject', {
                    data: {
                        name,
                    },
                });
                Toast.success('Materia removida dos favoritos!', this);
            }

            this.saves = subject.data.map((data: ISubjects) => data.name);
        } catch (err) {
            Toast.error('Tente novamente!', this);
        }
        this.loading = false;
    }
}
</script>
