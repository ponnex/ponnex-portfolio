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

  /**
   * Vue mounted lifecycle hook
   */
  mounted() {
    this.animationLoop();
  }

  animationLoop() {
    let navbarTagEl = window.document.querySelector('.navbar') as HTMLElement;
    if (window.scrollY > 15) {
      if (navbarTagEl) navbarTagEl.classList.add('is-sticky');
    } else {
      if (navbarTagEl) navbarTagEl.classList.remove('is-sticky');
    }
    requestAnimationFrame(this.animationLoop);
  }
}
</script>
