<template>
  <ul class="header__links">
    <n-link tag="li" to="/" role="presentation" class="header-link" :class="{ 'active': $route.path === '/' }">
      <a href="#" @click="collapsed()">Portfolio</a>
    </n-link>
    <n-link tag="li" to="/projects" role="presentation" class="header-link"
      :class="{ 'active': $route.path === '/projects' }">
      <a href="#" @click="collapsed()">Projects</a>
    </n-link>
    <n-link tag="li" to="/resume" role="presentation" class="header-link"
      :class="{ 'active': $route.path === '/resume' }">
      <a href="#" @click="collapsed()">Resume</a>
    </n-link>
    <a role="presentation" class="theme-toggle header-link icon"
      :class="[{ 'ico-sun': theme === 'default' }, { 'ico-moon': theme === 'light' }]" @click="changeTheme()">
    </a>
  </ul>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import clickOutsideExclude from '@/plugins/click-outside-exclude';
declare var _: any;

@Component({
  directives: {
    clickOutsideExclude
  }
})
export default class NavBar extends Vue {
  /**
   * The current theme
   */
  theme: string = 'light';
  /**
   * Nav drawer state
   */
  isCollapsed: boolean = true;

  /**
   * Emit current theme to parent component.
   *
   * @param theme The current selected theme.
   */
  changeTheme() {
    this.theme = this.theme != 'default' ? 'default' : 'light';
    this.$emit('themeChanged', this.theme);
  }

  /**
   * Toggle nav drawer state
   */
  toggleTheme() {
    this.isCollapsed = !this.isCollapsed;
  }

  /**
   * Closes NavBar
   */
  collapsed() {
    this.isCollapsed = true;
  }
}
</script>
