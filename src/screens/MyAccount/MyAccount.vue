<template>
    <div>
        <Header></Header>

        <v-container>
            <v-tabs class="mt-12" background-color="transparent" color="teal">
                <v-tab class="text-none">
                    <v-icon left>mdi-account</v-icon>
                    Mudar informações
                </v-tab>

                <v-tab class="text-none">
                    <v-icon left>mdi-lock</v-icon>
                    Mudar senha
                </v-tab>

                <v-tab-item class="pa-5" style="background-color: #fafafa;">
                    <ChangeInfo></ChangeInfo>
                </v-tab-item>
                <v-tab-item class="pa-5" style="background-color: #fafafa;">
                    <ChangePass></ChangePass>
                </v-tab-item>
        </v-tabs>
        </v-container>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './../shared/Header/Header.vue';
import ChangeInfo from './ChangeInfo.vue';
import ChangePass from './ChangePass.vue';

@Component({
    components: {
        Header,
        ChangeInfo,
        ChangePass,
    },
})
export default class MyAccount extends Vue {}
</script>

<style>

</style>