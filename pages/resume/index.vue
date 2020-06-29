<template>
  <div class="resume">
    <pdf src="/ramos_resume.pdf">
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
import { Vue, Component } from "nuxt-property-decorator";
// @ts-ignore
import pdf from "pdfvuer";

@Component({
  components: {
    pdf
  }
})
export default class ResumePage extends Vue {

}
</script>
