<template>
  <div>
    <q-list bordered separator>

      <q-item dense clickable v-ripple v-for="item in optionsData" :key="item.id">
        <q-item-section>
          <q-item-label> {{ item.name }} </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class ListComponent extends Vue {
  @Prop() // Props
  optionsData: string[]|undefined
}
</script>
