<template>
  <div>
    <Header></Header>

    <v-content>
      <v-container v-show="selectLesson">
        <v-row>
          <v-col>
            <v-card :loading="loading">
              <v-list dense shaped>
                <v-subheader>Lições</v-subheader>
                <v-list-item-group>
                  <v-list-item v-for="(item, index) of listItems" :key="index" color="teal">
                    <v-list-item-avatar>
                      <v-img :src="`https://api.adorable.io/avatars/50/${item.titulo}.png`"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>{{ item.titulo }}</v-list-item-title>
                      <v-list-item-subtitle>{{ item.materia }}</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action class="d-inline">
                      <v-btn
                        icon
                        :color="`${item.titulo, savesLessons.includes(item.titulo) && 'teal'}`"
                        @click="favor(item.titulo, savesLessons.includes(item.titulo))"
                      >
                        <v-icon>mdi-heart</v-icon>
                      </v-btn>
                      <v-btn icon @click="openLesson(item.conteudo)">
                        <v-icon>mdi-import</v-icon>
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                </v-list-item-group>
                <v-list-item v-if="!listItems.length">
                  <v-list-item-content>
                    <v-list-item-title>Sem conteudo no momento</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <Lesson :content="contentLesson" v-show="!selectLesson"></Lesson>
      <GoHome v-show="!selectLesson" @cancel="selectLesson = true;"></GoHome>
    </v-content>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Header from '../shared/Header/Header.vue';
import apiContent from './../../service/apiContent';
import Lesson from './Lesson.vue';
import GoHome from './GoHome.vue';
import Toast from '../../helpers/Toast';
import api from '../../service/api';

export interface IFavorite {
  name: string;
  user: string;
  created: string;
}

export interface IContent {
  content: {
    titulo: string;
    materia: string;
    ensino: string;
    conteudo: string;
  };
}

@Component({
  components: {
    Header,
    Lesson,
    GoHome,
  },
})
export default class Lessons extends Vue {
  private matter!: string;
  private ensino!: string;
  private listItems: any[] = [];
  private contentLesson = '';
  private selectLesson = true;
  private savesLessons: string[] = [];
  private loading = false;

  public created() {
    this.matter = this.$router.currentRoute.query.materia as string;
    this.ensino = this.$router.currentRoute.query.ensino as string;
    this.request();
  }

  private async request() {
    this.loading = true;
    try {
      const res = await apiContent.post('/filter', {
        materia: this.matter.toLowerCase(),
        ensino: this.ensino,
      });

      const favorites = await api.get('/lesson');
      this.savesLessons = favorites.data.map((favorite: IFavorite) => favorite.name);
      this.listItems = res.data.map((content: IContent) => content.content);

      this.$toasted.success('Tudo pronto!', {
        duration: 2500,
      });
    } catch (err) {
      this.$toasted.error('Falha na requisição', {
        duration: 2500,
      });
    }

    this.loading = false;
  }

  private openLesson(content: string): void {
    this.contentLesson = content;
    this.selectLesson = false;
  }

  private async favor(name: string, isFavorite: boolean) {
    this.loading = true;
    try {
      if (!isFavorite) {
        const lesson = await api.post('/lesson', {
          name,
        });

        this.savesLessons.push(lesson.data);
        Toast.success('Lição adicionada aos favoritos!', this);
      } else {
        const lesson = await api.delete('/lesson', {
          data: {
            name,
          },
        });

        this.savesLessons.splice(this.savesLessons.indexOf(lesson.data), 1);
        Toast.success('Lição removida dos favoritos!', this);
      }
    } catch (err) {
      Toast.error('Ops, tivemos um problema ):', this);
    }
    this.loading = false;
  }
}
</script>
