<template>
  <div>
    <q-list bordered separator>

      <q-expansion-item
        v-for="item in optionsData"
        :key="item.id"
        :label="item.name"
        expand-separator
      >
        <q-card>
          <q-card-section>
            {{ item.desc }}
          </q-card-section>
        </q-card>
      </q-expansion-item>
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
