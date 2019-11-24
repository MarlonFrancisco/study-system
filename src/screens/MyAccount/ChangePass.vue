<template>
    <v-container>
        <v-row>
            <v-col xs="12" md="6">
                <v-text-field label="Nova Senha" color="teal" type="password"></v-text-field>
            </v-col>
            <v-col xs="12" md="6">
                <v-text-field label="Confirmar senha" color="teal" type="password"></v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-btn color="teal" class="white--text">Salvar</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ChangePass extends Vue {}
</script>

<style>

</style>