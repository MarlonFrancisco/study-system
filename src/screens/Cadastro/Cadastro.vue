<template>
    <v-container fluid fill-height>
        <v-row align="center" justify="center">
            <v-col xs="12" md="7" cols="12">
                <v-card class="mx-auto my-12" width="100%" height="410px" :loading="loading">
                    <v-row height="100%" style="height: 100%;">
                        <v-col xs="12" md="6" cols="12">                    
                            <Form @save="realizeSave"></Form>
                        </v-col>
                        <v-col xs="12" md="6" cols="12" class="pb-0 pt-0">
                            <img src="http://www.profissaoevocacao.com.br/wp-content/uploads/2017/06/estudar-matematica.jpg" width="100%" height="100%"/>                        
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Form from './Form.vue';
import './model/Cadastro';
import api from './../../service/api';
import { login } from '../../auth';
import { ILogin } from './../../typings/login';

@Component({
    components: {
        Form,
    },
})
export default class Cadastro extends Vue {
    private loading = false;

    private async realizeSave(body: { name: string; email: string; password: string; }) {
        this.loading = true;

        const result = Object.entries(body).map((value) => {
            if (value[1].length < 3) {
                this.$toasted.show(`Preencha o campo ${value[0]}`, {
                    duration: 2000,
                });

                return false;
            }
        });

        if (result.includes(false)) {
            this.loading = false;
            return;
        }

        try {
            const res = await api.post<ILogin>('/auth/create', body);
            console.log(body);

            login(res.data.token);

            this.loading = false;
            this.$toasted.show('Conta cadastrada com sucesso', {
                duration: 2000,
            });

            setTimeout(() => this.$toasted.show('Sejá bem vindo(a)', {
                duration: 2000,
            }), 3000);
            this.$router.push('/study-system-with-vue/home');
        } catch (err) {
            this.loading = false;
            this.$toasted.show('Tente novamente!', {
                duration: 2000,
            });
            this.$router.push('/study-system-with-vue/cadastro');
        }
    }
}
</script>

<style>

</style>