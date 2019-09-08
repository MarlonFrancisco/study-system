<template>
    <div>
        <v-card-text>
            <v-text-field v-model="email" label="Email" color="teal"></v-text-field>
        </v-card-text>
        <v-card-actions>
            <v-btn color="teal" width="50%" elevation="1" @click="recovery" class="mx-auto text-capitalize">Enviar</v-btn>
            <v-btn elevation="0" class="mx-auto text-capitalize" @click="cancel">Cancelar</v-btn>
        </v-card-actions>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import Login from './model/Login';

@Component
export default class EsqueceuSenha extends Vue {
    @Prop(String) public email!: string;

    @Emit()
    private recovery(body: string) {
        return this.email;
    }

    @Emit()
    private cancel() {
        return;
    }
}
</script>

<style>

</style>