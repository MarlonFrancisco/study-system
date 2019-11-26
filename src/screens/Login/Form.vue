<template>
  <div>
    <v-card-text>
      <h2 style="font-weight: 300; color: gray">Login</h2>
      <v-text-field v-model="form.email" label="Email" color="teal"></v-text-field>
      <v-text-field v-model="form.password" type="password" label="Senha" color="teal"></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="teal"
        class="mx-auto text-none white--text"
        width="100%"
        elevation="1"
        @click="login"
      >Entrar</v-btn>
    </v-card-actions>

    <v-card-actions>
      <router-link
        to="/study-system-with-vue/cadastro"
        style="text-decoration: none"
        class="mx-auto"
      >
        <v-btn color="teal" 
        class="white--text text-none" elevation="0">Ainda não possuo uma conta</v-btn>
      </router-link>
    </v-card-actions>

    <v-card-actions>
      <v-btn
        elevation="0"
        color="transparent"
        class="mx-auto text-none"
        @click="recovery"
      >Esqueceu a senha?</v-btn>
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