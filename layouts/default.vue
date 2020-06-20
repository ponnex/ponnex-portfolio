<template>
  <div class="theme" :class="`theme--${theme}`">
    <div class="base">
      <div class="base__page">
        <header class="header">
          <header-component @themeChanged="onThemeChanged($event)"></header-component>
        </header>
        <main>
          <nuxt />
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import HeaderComponent from '@/components/header/header.vue';

@Component({
  components: {
    HeaderComponent
  }
})
export default class Default extends Vue {
  /**
	 * The current theme
	 */
  theme: string = 'default';

  /**
   * Update the current theme
   * 
   * @param theme The updated theme
   */
  onThemeChanged(theme: string) {
    this.theme = theme;
  }

}
</script>