<template>
  <div class="blog">
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
export default class ProjectsPage extends Vue {

}
</script>
