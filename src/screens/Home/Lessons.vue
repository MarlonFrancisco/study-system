<template>
    <v-card :loading="load" style="max-height: 500px; overflow-y: auto;">
        <v-card-title class="subtitle-1">Lições salvas</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <v-list v-if="items.length">
                <v-list-item link v-for="(item, index) of items" :key="index">
                    <v-list-item-icon>
                        <v-img :src="`https://api.adorable.io/avatars/50/${item.name}.png`"></v-img>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                        <v-list-item-subtitle>Lição favoritada em: {{ new Date(item.created).toLocaleDateString() }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-card-text v-else>Nenhuma lição salva</v-card-text>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ILessonSave } from './../../typings/lesson';

@Component
export default class Subject extends Vue {
    @Prop() public items!: ILessonSave[];
    @Prop() public load = true;
}
</script>

<style>

</style>