<template>
    <v-bottom-navigation
        absolute
        shift
        value="value"
        active.sync="value"
        color="teal"
        class="navigation"
    >
        <v-btn dark @click="selectMode('youtube')">
            <span>Abrir Youtube</span>
            <v-icon>mdi-video</v-icon>
        </v-btn>
        <v-btn dark @click="selectMode('notas')">
            <span>Abrir Notas</span>
            <v-icon>mdi-chat</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BottomNavigation extends Vue {
    private selectMode(mode: string) {
        if (mode === 'youtube') {
            window.open('https://www.youtube.com.br', '_black');
        } else if (mode === 'notas') {
            return;
        }
    }
}
</script>

<style lang="scss" scoped>
    @media (max-width: 468px) {
        .navigation {
            display: none;
        }
    }
</style>