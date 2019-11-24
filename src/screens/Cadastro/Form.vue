<template>
    <v-card class="mx-auto" max-width="500" :loading="loading">
      <v-card-title class="title font-weight-regular justify-space-between">
        <span>Cadastro</span>
        <v-avatar color="teal lighten-2" class="subheading white--text" size="24" v-text="step"></v-avatar>
      </v-card-title>

      <v-window v-model="step">
        <v-window-item :value="1">
          <v-card-text>
            <v-text-field v-model="form.name" label="Nome" color="teal"></v-text-field>
          </v-card-text>
        </v-window-item>
        <v-window-item :value="2">
          <v-card-text>
            <v-text-field v-model="form.email" type="email" label="Email" color="teal"></v-text-field>
            <span class="caption grey--text text--darken-1">Email utlizado para logar na sua conta</span>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="3">
          <v-card-text>
            <v-text-field v-model="form.password" type="password" label="Senha" color="teal"></v-text-field>
            <v-text-field v-model="form.confirmPassword" label="Confirmar senha" type="password" color="teal"></v-text-field>
            <span class="caption grey--text text--darken-1">Escreva uma senha para a sua conta!</span>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="4">
          <div class="pa-4 text-center">
            <h3 class="title font-weight-light mb-2">Você aceita os temos de uso?</h3>
            <v-checkbox v-model="form.useTerms" color="teal" style="display: inline-block"></v-checkbox>
          </div>
        </v-window-item>
      </v-window>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn :disabled="step === 1" icon text color="teal" @click="step--"><v-icon>mdi-chevron-left</v-icon></v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="step === 4"
          color="teal"
          class="white--text"
          depressed
          icon
          @click="step++"
        ><v-icon>mdi-chevron-right</v-icon></v-btn>
        <v-spacer></v-spacer>
        <v-btn class="text-none white--text" elevation="0" color="teal" @click="cancel()">Cancelar</v-btn>
        <v-btn :disabled="step < 4" class="text-none white--text" color="teal" @click="save">Criar</v-btn>
      </v-card-actions>
    </v-card>
</template>

<script lang="ts">
import { Component, Emit, Vue, Prop } from 'vue-property-decorator';
import Cadastro from './model/Cadastro';

@Component
export default class Form extends Vue {
  @Prop(Boolean) private loading!: boolean;
  private step = 1;
  private form = new Cadastro();

  private currentTitle(): string {
    switch (this.step) {
      case 1:
        return 'Sign-up';
      case 2:
        return 'Create a password';
      default:
        return 'Account created';
    }
  }

  private cancel(): void {
    this.$router.push('/study-system-with-vue');
  }

  @Emit()
  private save() {
    return this.form;
  }
}
</script>

<style>
</style>