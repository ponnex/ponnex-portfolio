<template>
	<div class="portfolio">
		<landing-template />
		<wip-component />
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import WipComponent from '@/components/wip/wip.vue';
import LandingTemplate from '@/components/template/landing/landing.vue';

@Component({
	components: {
		WipComponent,
		LandingTemplate
	}
})
export default class IndexPage extends Vue {
	/**
	   * The current theme
	   */
	theme: string = 'light';

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
