<template>
    <div>
        <Header></Header>

        <v-container fluid fill-height class="mt-10">
            <v-row>
                <v-col xs="12" md="3" v-for="(item, index) of items">
                    <v-card>
                        <v-img :src="item.image" max-height="178px">
                            <v-card-title class="align-end fill-height white--text">{{item.name}}</v-card-title>
                        </v-img>
                        <v-card-text>{{item.title}}</v-card-text>

                        <v-card-actions>
                            <v-btn icon title="Favoritar">
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
    @Component({
        components: {
            Header,
            BottomNavigation,
        },
    })
    export default class Subjects extends Vue {
        private items = subjects.subjects;
    }
</script>