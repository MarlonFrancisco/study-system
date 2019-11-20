<template>
    <v-container fluid fill-height>
        <v-row align="center" justify="center">
            <v-col xs="12" md="7" cols="12">
                <v-card class="mx-auto" width="100%" height="410px" elevation="1" :loading="loading">
                    <v-row height="100%" style="height: 100%;">
                        <v-col xs="12" md="6" cols="12">                    
                            <Form @login="save" v-show="!stateForgotPassword && !newPassword" @recovery="stateForgotPassword = true"></Form>
                            <ForgotPassword v-show="stateForgotPassword && !newPassword" @recovery="recover" @cancel="stateForgotPassword = false"></ForgotPassword>
                            <NewPassword v-show="!stateForgotPassword && newPassword" @cancel="newPassword = $event"></NewPassword>
                        </v-col>
                        <v-col xs="12" md="6" cols="12" class="pb-0 pt-0">
                            <img src="https://static.biggylabs.com.br/images/clientes/valisere/img/home.jpg" width="100%" height="100%"/>                        
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Form from './Form.vue';
import ForgotPassword from './ForgotPassword.vue';
import api from '../../service/api';
import { ILogin } from '../../typings/login';
import { login } from '../../helpers/auth';
import Toast from './../../helpers/Toast';
import NewPassword from './NewPassword.vue';

@Component({
    components: {
        Form,
        ForgotPassword,
        NewPassword,
    },
})
export default class Login extends Vue {
    private stateForgotPassword = false;
    private loading = false;
    private newPassword = false;

    public created() {
        const token = this.$router.currentRoute.query.token;

        if (token) {
            this.newPassword = true;
        }
    }

    private async save(body: Login) {
        this.loading = true;
        try {
            const res = await api.post<ILogin>('/auth/login', body);
            this.loading = false;
            Toast.success('Login realizado com sucesso!', this);
            login(res.data.token);
            this.$router.push('/study-system-with-vue/home');
        } catch (err) {
            this.loading = false;
            Toast.error('Usuario não encontrado!', this);
        }
    }

    private async recover(email: string) {
        this.stateForgotPassword = false;
        this.loading = true;
        try {
            const res = await api.post('/recovery/password/new', { email });

            Toast.success('Enviamos um email para você (:', this);
            this.loading = false;
        } catch (err) {
            Toast.error('Usuario não encontrado!', this);
            this.loading = false;
        }
    }
}
</script>

<style lang="scss" scoped>
    .card {
        height: 100%;
        border: none !important;
    }
</style>