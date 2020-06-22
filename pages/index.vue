<template>
  <div class="hero__container">
    <div class="hero__main">
      <n-link tag="button" to="/">
        <span class="icon ico-hero"></span>
      </n-link>
      <h1 class="hero-heading">
        Emmanuel<br>
        Francis<br>
        Ramos Jr.
      </h1>
      <div class="social__container">
        <span class="icon ico-instagram"><a href="https://www.instagram.com/ponnexfpv"></a></span>
        <span class="icon ico-linkedin"><a href="https://www.linkedin.com/in/ponnex/"></a></span>
        <span class="icon ico-github"><a href="https://github.com/ponnex"></a></span>
      </div>
    </div>
    <div>
      <header>
        <div class="header__container">
          <div class="header__nav">
            <n-link tag="span" to="/" class="nav-items" :class="{'selected': $route.path === '/'}">Portfolio</n-link>
            <n-link tag="span" to="/resume" class="nav-items" :class="{'selected': $route.path === '/resume'}">Resume</n-link>
            <n-link tag="span" to="/blog" class="nav-items" :class="{'selected': $route.path === '/blog'}">Blog</n-link>
          </div>
        </div>
      </header>
      <article class="article">
        <div class="article__container">
          <span class="article-heading">- Introduction</span>
          <span class="article-content">
            <p>Frontend and Mobile Developer, based in Philippines.</p>
          </span>
          <span class="article-subcontent">
            <p>
              A software engineer passionate about solving problems through technology. 
            </p>
          </span>
        </div>
      </article>
    </div>
    <div>
      <span class="icon icon-interactable" :class="[{'ico-sun': theme == 'default'}, {'ico-moon': theme == 'light'}]" @click="changeTheme()"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  layout: 'landing'
})
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

<style lang="scss" scoped>
 .icon-interactable {
   margin-top: 8px;
 }
</style>