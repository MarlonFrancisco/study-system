<template>
    <v-container>
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
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ChangeInfo extends Vue {}
</script>