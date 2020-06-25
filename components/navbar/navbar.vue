<template>
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" @click="toggleTheme()">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
    <div class="navbar-collapse collapse" :class="{'in': !isCollapsed}">
      <ul class="header__utility nav navbar-nav navbar-right">
        <li role="presentation" class="theme-toggle header-link" @click="changeTheme()">
          <span
            role="button"
            class="icon"
            :class="[{'ico-sun': theme == 'default'}, {'ico-moon': theme == 'light'}]"
          ></span>
        </li>
      </ul>
      <div class="header__links">
        <ul class="nav navbar-nav navbar-right">
          <n-link
            tag="li"
            to="/"
            role="presentation"
            class="header-link"
            :class="{'active': $route.path === '/'}"
          >
            <a href="#">Portfolio</a>
          </n-link>
          <n-link
            tag="li"
            to="/resume"
            role="presentation"
            class="header-link"
            :class="{'active': $route.path === '/resume'}"
          >
            <a href="#">Resume</a>
          </n-link>
          <n-link
            tag="li"
            to="/blog"
            role="presentation"
            class="header-link"
            :class="{'active': $route.path === '/blog'}"
          >
            <a href="#">Blog</a>
          </n-link>
        </ul>
      </div>
    </div>
    <n-link tag="a" to="/" class="logo icon ico-hero" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class NavBarComponent extends Vue {
  /**
   * The current theme
   */
  theme: string = "default";
  /**
   * Nav drawer state
   */
  isCollapsed: boolean = true;

  /**
   * Emit current theme to parent component.
   *
   * @param theme The current selected theme.
   */
  changeTheme(theme: string) {
    this.theme = this.theme != "default" ? "default" : "light";
    this.$emit("themeChanged", this.theme);
  }

  /**
   * Toggle nav drawer state
   */
  toggleTheme() {
    this.isCollapsed = !this.isCollapsed;
	}
	
	/**
   * Vue mounted lifecycle hook
   */
  mounted() {
    this.animationLoop();
  }

	/**
	 * Function loop for listening scroll position Y using requestAnimationFrame
	 */
  animationLoop() {
    let { browser, isTablet, isMobile } = this.$util.browserDetails();
    let navbarTagEl = window.document.querySelector('.navbar') as HTMLElement;
    if (window.scrollY > (isMobile ? 1 : 55)) {
      if (navbarTagEl) navbarTagEl.classList.add('is-sticky');
    } else {
      if (navbarTagEl) navbarTagEl.classList.remove('is-sticky');
    }
    requestAnimationFrame(this.animationLoop);
  }
}
</script>
