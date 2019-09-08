<template>
    <v-container fluid fill-height>
        <v-row align="center" justify="center">
            <v-col xs="12" md="7" cols="12">
                <v-card class="mx-auto" width="100%" height="410px" elevation="1">
                    <v-row height="100%" style="height: 100%;">
                        <v-col xs="12" md="6" cols="12">                    
                            <v-card-title class="display-title">Empresa</v-card-title>
                            <Form @login="save" v-show="!stateForgotPassword" @recovery="stateForgotPassword = true"></Form>
                            <ForgotPassword v-show="stateForgotPassword" @recovery="recover" @cancel="stateForgotPassword = false"></ForgotPassword>
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
import { Component, Vue, Watch } from 'vue-property-decorator';
import Form from './Form.vue';
import ForgotPassword from './ForgotPassword.vue';

@Component({
    components: {
        Form,
        ForgotPassword,
    },
})
export default class Login extends Vue {
    public stateForgotPassword = false;
    private async save(body: Login) {
        console.log(body);
    }

    private async recover(body: string) {
        console.log(body);
    }
}
</script>

<style lang="scss" scoped>
    .card {
        height: 100%;
        border: none !important;
    }
</style>