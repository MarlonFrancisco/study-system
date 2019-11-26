<template>
    <v-container>
        <v-row>
            <v-col xs="12" md="6">
                <v-row>
                    <v-col md="1">
                        <v-checkbox v-model="name"></v-checkbox>
                    </v-col>
                    <v-col>
                        <v-text-field
                            :disabled="!name"
                            v-model="nameValue"
                            label="Nome"
                            color="teal"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-col>
            <v-col xs="12" md="6">
                <v-row>
                    <v-col md="1">
                        <v-checkbox v-model="email"></v-checkbox>
                    </v-col>
                    <v-col>
                        <v-text-field
                            label="Email"
                            v-model="emailValue"
                            :disabled="!email"
                            type="email"
                            color="teal"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-btn :disabled="!name && !email" color="teal" class="white--text" elevation="1" @click="save()">
                    Salvar
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import api from '../../service/api';
import Toast from '../../helpers/Toast';

@Component
export default class ChangeInfo extends Vue {
    private name = false;
    private email = false;
    private nameValue = '';
    private emailValue = '';

    private async save() {
        try {
            await api.put('/user/infos', {
                name: this.nameValue,
                email: this.emailValue,
            });

            this.$router.push('/study-system-with-vue/home');
            Toast.success('Tudo ok (:', this);
        } catch (err) {
            Toast.error('Ops, tivemos um problema ):', this);
        }
    }
}
</script>
