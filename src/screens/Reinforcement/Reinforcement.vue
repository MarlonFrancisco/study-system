<template>
    <div>
        <Header></Header>
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
    export default class Reinforcement extends Vue {}
</script>