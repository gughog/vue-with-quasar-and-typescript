<template>
  <div>
    <q-toolbar class="bg-grey-3">
      <q-btn flat round dense>
        <q-icon name="menu" />
      </q-btn>
      <q-toolbar-title>
        Vue + Quasar + Typescript
      </q-toolbar-title>
      <q-btn flat round dense>
        <q-icon name="more_vert" />
      </q-btn>
    </q-toolbar>

    <!-- <div class="row justify-center text-center q-mb-md">
      <h4 class="col-12"> {{ textData }} </h4>
      <h3 class="col-12"> {{ value }} </h3>
      <div class="col-12 q-gutter-x-md">
        <q-btn color="positive" rounded label="Add" @click="add" />
        <q-btn color="negative" rounded label="Rem" @click="rem" />
      </div>
    </div> -->

    <div class="row justify-center q-my-md">
      <q-input
        filled
        v-model="textInput"
        color="deep-orange"
        label="Item"
        @keydown.enter="addToData"
        dense
        class="col-12"
      />

      <q-list class="col-12" bordered separator>
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
  textData: string = 'Class-based Vue Components'
  value: number = 0
  opcoes: object[] = []
  textInput: string = ''

  public add (): void { this.value += 1 }
  public rem (): void { this.value -= 1 }
  public addToData (): void {
    this.opcoes.push({
      name: this.textInput,
      id: Math.floor(Math.random() * 1000)
    })
    this.textInput = ''
  }
}
</script>
