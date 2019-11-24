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
                <v-btn color="teal" class="white--text" elevation="1">
                    Salvar
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ChangeInfo extends Vue {
    private name = false;
    private email = false;
}
</script>
