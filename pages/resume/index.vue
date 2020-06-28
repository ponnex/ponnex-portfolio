<template>
  <div class="resume">
    <wip-component />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import WipComponent from '@/components/wip/wip.vue';

@Component({
  components: {
    WipComponent
  }
})
export default class ResumePage extends Vue {

}
</script>
