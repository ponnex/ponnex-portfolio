<template>
  <div class="portfolio">
    <span>Portfolio</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class IndexPage extends Vue {
  /**
	 * The current theme
	 */
	theme: string = 'default';

	/**
	 * Emit current theme to parent component.
	 * 
	 * @param theme The current selected theme.
	 */
	changeTheme(theme: string) {
		this.theme = this.theme != 'default' ? 'default' : 'light';
		this.$root.$emit('themeChanged', this.theme);
	}
}
</script>
