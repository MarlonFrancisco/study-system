<template>
    <div>
        <Header></Header>

        <v-container fluid fill-height>
            <v-row>
                <v-col xs="12" md="4">
                    <Calender :items="calendar" :load="loading"></Calender>
                </v-col>

                <v-col xs="12" md="4">
                    <Subject :items="subject" :load="loading"></Subject>
                </v-col>

                <v-col xs="12" md="4">
                    <Lessons :items="lessonsSave" :load="loading"></Lessons>
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
import api from '../../service/api';
import { IUser } from '../../typings/login';
import { ICalendar } from './../../typings/calendar';
import { ILessonSave } from './../../typings/lesson';
import { ISubjects } from './../../typings/subsject';

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
    }];
    private subject: string[] = [];
    private lessonsSave: ILessonSave[] = [];
    private loading = false;
    public async created() {
        this.loading = true;
        const res = await api.get<IUser>('/user');

        this.subject.push(...res.data.subjects);
        this.lessonsSave.push(...res.data.lessons);
        this.loading = false;
    }
}
</script>

<style>

</style>