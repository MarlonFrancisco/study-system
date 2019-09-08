<template>
    <div>
        <v-card-text>
            <v-text-field v-model="form.email" label="Email" color="teal"></v-text-field>
            <v-text-field v-model="form.password" type="password" label="Senha" color="teal"></v-text-field>
        </v-card-text>
        <v-card-actions>
            <v-btn color="teal" class="mx-auto text-capitalize" width="100%" elevation="1" @click="login">Entrar</v-btn>
        </v-card-actions>

        <v-card-actions>
            <v-btn color="transparent" class="mx-auto text-capitalize" elevation="0">
                <router-link to="/study-system-with-vue/cadastro">Ainda não possuo uma conta</router-link>
            </v-btn>
        </v-card-actions>

        <v-card-actions>
            <v-btn elevation="0" color="transparent" class="mx-auto text-capitalize" @click="recovery">Esqueceu a senha?</v-btn>
        </v-card-actions>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';
import Login from './model/Login';

@Component
export default class Form extends Vue {
    private form = new Login();

    @Emit()
    private login() {
        const body = this.form;
        this.form = new Login();

        return body;
    }

    @Emit()
    private recovery() {
        return;
    }
}
</script>

<style>
</style>