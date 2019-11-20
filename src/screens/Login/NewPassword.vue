<template>
  <div>
    <v-card-text>
      <v-text-field type="password" color="teal" v-model="pass.password" placeholder="Nova senha"></v-text-field>
      <v-text-field type="password" color="teal" v-model="pass.confirmPassword" placeholder="Confirmar senha"></v-text-field>
    </v-card-text>
    <v-card-actions>
        <v-btn color="teal" class="ml-3 white--text" @click="confirm">Confirmar</v-btn>
        <v-btn color="transparent" class="ml-3" elevation="0" @click="cancel">Cancelar</v-btn>
    </v-card-actions>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';
import Password from './model/NewPassword';
import Toast from '../../helpers/Toast';
import api from '../../service/api';

@Component
export default class NewPassword extends Vue {
  private pass = new Password();

  private async confirm() {
      if (!this.verifyPasswords()) { return; }

      try {
          const res = await api.post('/recovery/password/confirm', {
              password: this.pass.password,
          }, {
              headers: { authorization: this.$router.currentRoute.query.token },
          });

          Toast.success('Senha alterada com sucesso!', this);
          this.cancel();
      } catch (err) {
          Toast.error('Token invalido!', this);
          this.pass = new Password();
          this.cancel();
      }
  }

  private verifyPasswords(): boolean {
      if (this.pass.password !== this.pass.confirmPassword) {
          Toast.error('As senhas se diferem!', this);
          return false;
      }

      if (this.pass.password === '' || this.pass.confirmPassword === '') {
          Toast.error('Os campos não podem ser nulos!', this);
          return false;
      }

      return true;
  }
  @Emit()
  private cancel(): boolean {
      return false;
  }
}
</script>

<style>
</style>