<template>
    <v-navigation-drawer v-model="stateDrawer" fixed temporary>
        <v-list-item>
            <v-list-item-avatar>
                <v-img src="https://api.adorable.io/avatars/50/usuario.png"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>{{ title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list>
            <v-list-item link v-for="(item, index) of itemsMenu" :key="index" @click="changePage(item.title)">
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop, Watch } from 'vue-property-decorator';

interface IItem {
    title: string;
    icon: string;
}

@Component
export default class Navigation extends Vue {
    @Prop(Boolean) public drawer = false;
    @Prop() public items!: IItem[];
    @Prop() public title!: string;

    private changePage(page: string) {
        this.$router.push(`/study-system-with-vue/${this.tratamentSelectPage(page)}`);
    }

    private tratamentSelectPage(page: string): string {
        return page.replace(' ', '').replace('ç', 'c').toLowerCase();
    }

    get itemsMenu() {
        return this.items;
    }

    get stateDrawer() {
        return this.drawer;
    }

    set stateDrawer(value: boolean) {
        this.closeNavigation(value);
    }

    @Watch('drawer')
    private onChangeDrawer(): void {
        this.stateDrawer = this.drawer;
    }

    @Emit()
    private closeNavigation(value: boolean): boolean {
        return value;
    }
}
</script>

<style>

</style>