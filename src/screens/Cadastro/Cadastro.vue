<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col xs="12" md="7" cols="12">
        <Form :loading="loading" @save="realizeSave($event)">/</Form>
      </v-col>
    </v-row>
  </v-container>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Form from './Form.vue';
import './model/Cadastro';
import api from './../../service/api';
import { login } from '../../helpers/auth';
import { ILogin } from './../../typings/login';
import Toast from '../../helpers/Toast';

@Component({
  components: {
    Form,
  },
})
export default class Cadastro extends Vue {
  private loading = false;

  private async realizeSave(body: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    useTerms: boolean;
  }) {
    if (body.name === '') {
        Toast.info('Preencha seu nome', this);
        return;
    }

    if (body.email === '') {
        Toast.info('Preencha seu email', this);
        return;
    }

    if (body.password === '' || body.password !== body.confirmPassword) {
        Toast.info('Campo senha invalido', this);
        return;
    }

    if (!body.useTerms) {
        Toast.info('Antes você precisa aceitar os termos de uso', this);
        return;
    }

    this.loading = true;

    try {
      const res = await api.post<ILogin>('/auth/create', body);
      login(res.data.token);
      this.loading = false;
      this.$toasted.show('Conta cadastrada com sucesso', {
        duration: 2000,
      });

      setTimeout(
        () =>
          this.$toasted.show('Sejá bem vindo(a)', {
            duration: 2000,
          }),
        3000,
      );
      this.$router.push('/study-system-with-vue/home');
    } catch (err) {
      this.loading = false;
      this.$toasted.show('Ops, o email cadastrado já existe!', {
        duration: 2000,
      });
      this.$router.push('/study-system-with-vue/cadastro');
    }
  }
}
</script>

<style>
</style>