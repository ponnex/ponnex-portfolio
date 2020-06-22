<template>
  <div class="theme" :class="`theme--${theme}`">
    <div class="base">
      <div class="base__page">
        <main>
          <nuxt />
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Default from '@/layouts/default.vue';

@Component
export default class Landing extends Default {
  /**
	 * The current theme
	 */
  theme: string = 'default';

  /**
   * Update the current theme
   * 
   */
	mounted() {
		this.$root.$on('themeChanged', (theme: string) => {
			this.theme = theme;
		});
		this.$nextTick(() => {
			let themeSwitcherIcon = document.querySelector('div.header__container') as HTMLElement;
			console.log(themeSwitcherIcon.querySelector('::after'))
		})
	}

}
</script>