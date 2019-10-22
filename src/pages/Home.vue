<template>
  <div>
    <q-toolbar class="bg-grey-3">
      <q-btn flat round dense>
        <q-icon name="menu" />
      </q-btn>
      <q-toolbar-title>
        {{ textData }}
      </q-toolbar-title>
      <q-btn flat round dense>
        <q-icon name="more_vert" />
      </q-btn>
    </q-toolbar>

    <div class="row justify-center q-my-md">
      <q-input
        filled
        v-model="textInput"
        color="deep-orange"
        stack-label
        label="Item"
        @keydown.enter="$refs.description.focus()"
        dense
        class="col-12"
      />
      <q-input
        filled
        v-model="textDesc"
        color="deep-orange"
        label="Description"
        @keydown.enter="addToData"
        dense
        class="col-12"
        autogrow
        ref="description"
      />

      <q-list v-if="opcoes.length > 0" class="col-12" bordered separator>
          <ListComponent :optionsData="opcoes" />
      </q-list>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import ListComponent from 'src/components/ListComponent.vue'

@Component({
  // Registro de components
  components: { ListComponent },
})
export default class Home extends Vue {
  // Estados, metodos, lifecycles,
  textData: string = 'Vue + Quasar + Typescript'
  value: number = 0
  opcoes: object[] = []
  textInput: string = ''
  textDesc: string = ''

  public add (): void { this.value += 1 }
  public rem (): void { this.value -= 1 }
  public addToData (): void {
    this.opcoes.push({
      id: Math.floor(Math.random() * 1000),
      name: this.textInput,
      desc: this.textDesc
    })
    this.textInput = ''
    this.textDesc = ''
  }
}
</script>
