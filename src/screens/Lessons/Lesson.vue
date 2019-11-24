<template>
    <v-container>
        <v-row>
            <v-col v-html="content"></v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
    import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
    
    @Component
    export default class Lesson extends Vue {
        @Prop({ type: String, required: false }) private content!: string;
    }
</script>

<style>

</style>