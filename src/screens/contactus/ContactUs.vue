<template>
    <div>
        <Header></Header>

        <v-content>
            <v-container>
                <v-row justify="center">
                    <v-col md="6">
                        <v-card elevation="1" :loading="loading">
                            <v-list>
                                <v-subheader>Fale conosco</v-subheader>

                                <v-list-item>
                                    <v-text-field
                                        v-model="form.subject"
                                        color="teal"
                                        placeholder="Assunto"
                                    ></v-text-field>
                                </v-list-item>

                                <v-list-item>
                                    <v-textarea
                                        v-model="form.message"
                                        color="teal"
                                        placeholder="Mensagem"
                                    ></v-textarea>
                                </v-list-item>

                                <v-list-item-action>
                                    <v-btn color="teal" class="white--text" @click="send()"
                                        >Enviar</v-btn
                                    >
                                </v-list-item-action>
                            </v-list>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './../shared/Header/Header.vue';
import { Contact, IContact } from './model/Contact';
import Toast from '../../helpers/Toast';
import api from '../../service/api';

@Component({
    components: {
        Header,
    },
})
export default class ContactUs extends Vue {
    public form: IContact = new Contact();
    private loading = false;

    private async send() {
        if (!this.validate()) {
            return;
        }

        this.loading = true;
        try {
            await api.post('/user/contactus', this.form);
            Toast.success(
                'Mensagem enviado com sucesso, logo retornaremos! (:',
                this,
            );
            this.form = new Contact();
        } catch (err) {
            Toast.error('Ops, tente novamente!', this);
        }
        this.loading = false;
    }

    private validate(): boolean {
        if (this.form.subject === '' || this.form.message === '') {
            Toast.error('Os campos não podem ser nulos', this);
            return false;
        }

        return true;
    }
}
</script>

<style></style>
