<template>
    <div>
        <Header></Header>

        <v-content>
            <v-carousel>
                <v-carousel-item v-for="(content, i) in contents" :key="i">
                    <v-sheet :color="content.color" height="100%" tile>
                        <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                        >
                            <div class="display-1 pl-9 pr-9" style="text-align: center;">{{ content.text }}</div>
                        </v-row>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </v-content>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './../shared/Header/Header.vue';
export interface IContentCarousel {
    color: string;
    text: string;
}
@Component({
    components: {
        Header,
    },
})
export default class WhoAre extends Vue {
    private contents: IContentCarousel[] = [
        {
            color: 'primary',
            text: 'Olá, ficamos muito felizes por você estar aqui!',
        },
        {
            color: 'secondary',
            text: 'Nosso principal objetivo é te ajudar a estudar de forma mais agradavel, com um ambiente totalmente adequado e organizado para estudo!',
        },
        {
            color: 'yellow darken-2',
            text: 'Sendo uma plataforma de estudos totalmente gratuita, estamos sempre a disposição para ajuda-lo a conseguir o seu objetivo. Nossa equipe está pronta para te auxiliar.',
        },
        {
            color: 'red',
            text: 'Mais ainda estamos em aprendizado, então seu feedback é muito importante para nós, por esse mesmo motivo na aba \'Fale Conosco\' é totalmente livre para que você nos envie sugestões ou criticas.',
        },
        {
            color: 'orange',
            text: 'Ainda temos muito o que aprender, e melhorar. Por isso mesmo diariamente lançamos novas versões da plataforma, para que assim sua experiência seja incrivel!',
        },
    ];
}
</script>
