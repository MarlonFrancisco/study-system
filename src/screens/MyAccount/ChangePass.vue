<template>
    <v-container>
        <v-row>
            <v-col xs="12" md="6">
                <v-text-field v-model="password" label="Nova Senha" color="teal" type="password"></v-text-field>
            </v-col>
            <v-col xs="12" md="6">
                <v-text-field v-model="confirmPassword" label="Confirmar senha" color="teal" type="password"></v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-btn color="teal" class="white--text" @click="save()">Salvar</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Toast from '../../helpers/Toast';
import api from '../../service/api';

@Component
export default class ChangePass extends Vue {
    private password = '';
    private confirmPassword = '';

    private async save() {

        if (this.password === '') {
            Toast.error('O Campo senha não pode ser nulo!', this);
            return;
        }

        if (this.password !== this.confirmPassword) {
            Toast.error('As senhas estão diferentes ):', this);
            return;
        }
        try {
            await api.put('/user/password', {
                password: this.password,
            });

            this.$router.push('/study-system-with-vue/home');
            Toast.success('Tudo ok!', this);
        } catch (err) {
            Toast.error('Ops, tivemos um problema', this);
        }
    }
}
</script>

<style>

</style>