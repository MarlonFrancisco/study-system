<template>
    <div>
        <Header></Header>

        <v-container>
            <v-tabs vertical class="mt-12" background-color="transparent" color="teal">
                <v-tab class="text-capitalize">
                    <v-icon left>mdi-account</v-icon>
                    Mudar informações
                </v-tab>

                <v-tab class="text-capitalize">
                    <v-icon left>mdi-lock</v-icon>
                    Mudar senha
                </v-tab>

                <v-tab-item class="pa-5">
                    <v-row>
                        <v-col xs="12" md="6">
                            <v-text-field label="Nome" color="teal"></v-text-field>
                        </v-col>
                        <v-col xs="12" md="6">
                            <v-text-field label="Email" type="email" color="teal"></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <v-btn color="teal" elevation="1">
                                Salvar
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-tab-item>
        </v-tabs>
        </v-container>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './../shared/Header/Header.vue';

@Component({
    components: {
        Header,
    },
})
export default class MyAccount extends Vue {}
</script>

<style>

</style>