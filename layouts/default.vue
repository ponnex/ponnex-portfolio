<template>
  <div class="theme" :class="`theme--${theme}`">
    <div class="base">
      <div class="base__page">
        <div>
          <nav class="header navbar">
            <nav-bar-component @themeChanged="onThemeChanged($event)"></nav-bar-component>
          </nav>
          <main class="body">
            <nuxt />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import NavBarComponent from '@/components/navbar/navbar.vue';

@Component({
  components: {
    NavBarComponent
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
