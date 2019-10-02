<template>
    <div>
        <Header></Header>
        <v-sheet height="350" class="mt-12">
            <v-btn fab text small @click="prev">
            <v-icon small>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab text small @click="next">
            <v-icon small>mdi-chevron-right</v-icon>
          </v-btn>
          <v-btn small elevation="0" style="background: transparent;">
              <v-toolbar-title>Janeiro</v-toolbar-title>
          </v-btn>
            <v-calendar
            type="month"
            now="2019-01-08"
            value="2019-01-08"
            event-color="teal"
            :events="events"
            ></v-calendar>
        </v-sheet>
        <BottomNavigation></BottomNavigation>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BottomNavigation from './../shared/BottomNavigation/BottomNavigation.vue';
import Header from './../shared/Header/Header.vue';

@Component({
    components: {
        Header,
        BottomNavigation,
    },
})
export default class Exams extends Vue {
    private events = [
        {
            name: 'Matematica',
            start: '2019-1-1',
            end: '2019-1-02',
        },
        {
            name: 'Português',
            start: '2019-1-3',
            end: '2019-1-5',
        },
        {
            name: 'Inglês',
            start: '2019-2-3',
            end: '2019-2-5',
        },
    ];
}
</script>