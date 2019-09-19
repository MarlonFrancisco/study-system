<template>
    <div>
        <Header></Header>

        <v-container fluid fill-height>
            <v-row>
                <v-col xs="12" md="4">
                    <Calender :items="calendar"></Calender>
                </v-col>

                <v-col xs="12" md="4">
                    <Subject :items="subject"></Subject>
                </v-col>

                <v-col xs="12" md="4">
                    <Lessons :items="lessonsSave"></Lessons>
                </v-col>
            </v-row>
        </v-container>

        <BottomNavigation></BottomNavigation>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './../shared/Header/Header.vue';
import Calender from './Calendar.vue';
import Subject from './Subject.vue';
import Lessons from './Lessons.vue';
import BottomNavigation from './../shared/BottomNavigation/BottomNavigation.vue';
import { ICalendar, ISubject, ILessonSave } from './model/types';

@Component({
    components: {
        Header,
        Calender,
        Subject,
        Lessons,
        BottomNavigation,
    },
})
export default class Home extends Vue {
    private calendar: ICalendar[] = [{
        name: 'Enem',
        date: new Date().toLocaleDateString(),
        icon: 'https://api.adorable.io/avatars/50/marlon.nascimento2@etec.sp.gov.br.png',
    }];
    private subject: ISubject[] = [{
        name: 'Matematica',
        icon: 'https://api.adorable.io/avatars/50/matematica.png',
    }];
    private lessonsSave: ILessonSave[] = [{
        name: 'Pitagoras',
        save: new Date().toLocaleDateString(),
        icon: 'https://api.adorable.io/avatars/50/pitagoras.png',
    }];
}
</script>

<style>

</style>