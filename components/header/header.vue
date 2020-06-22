<template>
  <div class="header__container">
		<n-link tag="button" to="/">
			<span class="icon ico-hero"></span>
		</n-link>
		<div class="header__nav">
			<n-link tag="span" to="/" class="nav-items" :class="{'selected': $route.path === '/'}">Portfolio</n-link>
			<n-link tag="span" to="/resume" class="nav-items" :class="{'selected': $route.path === '/resume'}">Resume</n-link>
			<n-link tag="span" to="/blog" class="nav-items" :class="{'selected': $route.path === '/blog'}">Blog</n-link>
			<span class="icon icon-interactable" :class="[{'ico-sun': theme == 'default'}, {'ico-moon': theme == 'light'}]" @click="changeTheme()"></span>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class HeaderComponent extends Vue {
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
		this.$emit('themeChanged', this.theme);
	}
}
</script>
