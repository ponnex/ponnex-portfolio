<template>
  <div class="resume">
    <pdf :scale.sync="scale" src="/ramos_resume.pdf">
      <template slot="loading">
        <span class="loading">Loading pdf...</span>
      </template>
    </pdf>
    <div class="resume__links">
      <a href="ramos_resume.pdf" target="_blank">
        Download PDF Resume
      </a>
      <a href="https://www.linkedin.com/in/ponnex/" target="_blank">
        View my LinkedIn Profile
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "nuxt-property-decorator";
// @ts-ignore
import pdf from "pdfvuer";
import VueScreen from 'vue-screen';

Vue.use(VueScreen);

@Component({
  components: {
    pdf
  }
})
export default class ResumePage extends Vue {
  /**
   * Scale value for PDF Component
   */
  scale: number | string = 'page-width';

  /**
   * Calculated pdfWidth A4 or based on current PDF used
   */
  pdfWidth: number = 794.6666666666666;

  /**
   * Watcher for screen width changes
   */
  @Watch('$screen.width')
  onScreenWidthChange(width: number) {
    this.resizePdf();
  }

  /**
   * Vue mounted lifecycle hook
   */
  mounted() {
    this.resizePdf();
  }

  /**
   * Resize PDF component
   */
  resizePdf() {
    this.$nextTick(() => {
      let { browser, isTablet, isMobile } = this.$util.browserDetails();
      let resumeEl = document.querySelector('.resume') as HTMLElement;
      let pagePadding = parseInt(window.getComputedStyle(resumeEl, null).getPropertyValue('padding-left').match(/\d+/g)![0]) * 2;
      let resumeWidth = (this.$screen.width - pagePadding) > 1600 ? 1600 : (this.$screen.width - pagePadding);
      this.scale = isMobile ? (resumeWidth / this.pdfWidth) : 'page-width'; 
    })
  }
}
</script>
