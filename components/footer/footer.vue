<template>
  <div class="footer__container">
    <social-icons></social-icons>
    <div class="salutation">
      <a href="https://floppy-bird-pwa.web.app/" target="_blank" class="easegg"><span>&lt;/&gt;</span></a>
      <span>with &#x1f496; by Emmanuel Francis Ramos ©2023</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import SocialIcons from '@/components/social-icons/social-icons.vue';

@Component({
  components: {
    SocialIcons
  }
})
export default class FooterComponent extends Vue {
  /**
   * Get current theme
   */
  get currentTheme() {
    return "light";
  }
}
</script>
