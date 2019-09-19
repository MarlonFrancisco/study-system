<template>
    <div>
        <v-card-title class="display-title">
            Criar minha conta
        </v-card-title>
        <v-card-text>
            <v-text-field v-model="form.name" label="Nome" color="teal"></v-text-field>
            <v-text-field v-model="form.email" type="email" label="Email" color="teal"></v-text-field>
            <v-text-field v-model="form.password" type="password" label="Senha" color="teal"></v-text-field>
        </v-card-text>
        <v-card-actions>
            <v-btn class="text-none" color="teal" width="30%" @click="save">Criar</v-btn>
            <v-btn class="text-none" color="transparent" elevation="0" width="30%">
                <router-link to="/study-system-with-vue">Cancelar</router-link>
            </v-btn>
        </v-card-actions>
    </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';
import Cadastro from './model/Cadastro';

@Component
export default class Form extends Vue {
    private form = new Cadastro();

    @Emit()
    private save() {
        return this.form;
    }
}
</script>

<style>

</style>