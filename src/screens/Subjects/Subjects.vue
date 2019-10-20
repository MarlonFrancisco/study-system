<template>
    <div>
        <Header></Header>

        <v-container fluid fill-height class="mt-10">
            <v-row>
                <v-col xs="12" md="3" v-for="(item, index) of items">
                    <v-card :loading="loading">
                        <v-img :src="item.image" max-height="178px">
                            <v-card-title class="align-end fill-height white--text">{{item.name}}</v-card-title>
                        </v-img>
                        <v-card-text>{{item.title}}</v-card-text>

                        <v-card-actions>
                            <v-btn icon title="Favoritar" :color="`${saves.indexOf(item.name) !== -1 && 'teal'}`" @click="favor(item.name, saves.indexOf(item.name) !== -1)">
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                            <v-btn icon title="Visualizar">
                                <v-icon>mdi-import</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BottomNavigation from './../shared/BottomNavigation/BottomNavigation.vue';
import Header from './../shared/Header/Header.vue';
import subjects from './assets/subjects.json';
import api from '../../service/api';
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

    public async created() {
        this.loading = true;
        const subject = await api.get('/subject');
        this.saves = subject.data.map((data) => data.name);
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
                this.$toasted.show('Materia favoritada!', {
                    duration: 2000,
                });
            } else {
                subject = await api.delete('/subject', {
                    data: {
                        name,
                    },
                });
                this.$toasted.show('Materia removida dos favoritos!', {
                    duration: 2000,
                });
            }

            this.saves = subject.data.map((data) => data.name);
            this.loading = false;
        } catch (err) {
            this.$toasted.show('Tente novamente!', {
                duration: 2000,
            });
            this.loading = false;
        }
    }
}
</script>