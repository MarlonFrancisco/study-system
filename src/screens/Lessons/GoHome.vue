<template>
  <v-btn fixed bottom right fab dark color="teal" title="Voltar as liçoes" @click="cancel()">
      <v-icon dark>mdi-format-list-bulleted-square</v-icon>
    </v-btn>
</template>

<script lang="ts">
    import { Component, Vue, Emit } from 'vue-property-decorator';
    
    @Component
    export default class GoHome extends Vue {
        @Emit()
        private cancel(): void {
            return;
        }
    }
</script>

<style>

</style>