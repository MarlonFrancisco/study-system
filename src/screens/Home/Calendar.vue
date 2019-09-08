<template>
    <v-card class="mt-10">
        <v-card-title class="subtitle-1">
            Calendario de vestibulares {{ year }}
        </v-card-title>

        <v-divider></v-divider>
        
        <v-card-text>
            <v-list>
                <v-list-item v-for="(item, index) of items" :key="index" link>
                    <v-list-item-icon>
                        <v-img :src="item.icon"></v-img>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ item.date }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ICalendar } from './model/types';

@Component
export default class Calendar extends Vue {
    @Prop() public items!: ICalendar;
    private year = new Date().getFullYear();
}
</script>

<style>

</style>