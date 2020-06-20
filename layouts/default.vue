<template>
  <div class="theme" :class="[{'theme--default': !light}, {'theme--light': light}]">
    <button @click="light = !light">Light/Dark</button>
    <nuxt class="base" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Default extends Vue {
light: boolean = false;


}
</script>