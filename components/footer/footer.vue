<template>
  <div class="footer__container">
    <div class="footer__information">
      <div class="footer__section section-1">
        <div class="section-title">
          <span>Got a project?</span>
          <span>Let's talk.</span>
        </div>
        <div>
          <p class="section-description">Sed ut perspiciatis unde commis iste natus error sit voluptatem accussantium.</p>
        </div>
        <a href="mailto:ponnex@gmail.com" class="contact-container">
          <span class="contact-email">ponnex@gmail.com</span>
          <span class="icon ico-email"></span>
        </a>
      </div>
      <div class="footer__section section-2">
        <div class="section-title">
          <span>Estimate your project?</span>
          <span>Let me know here.</span>
        </div>
        <div>
          <span>What's your name?</span>
          <input class="text-input" type="text" />
        </div>
        <div>
          <span>Your fancy email</span>
          <input class="text-input" type="text" />
        </div>
        <div class="attachment">
          <span>Tell me about your project</span>
          <span class="icon ico-arrow"></span>
          <span class="icon ico-attachment"></span>
        </div>
      </div>
    </div>
    <div class="footer__social">
      <i class="logo icon ico-hero"></i>
      <div class="salutation">
        <span>Thanks for scrolling,</span>
        <span>that's all folks.</span>
      </div>
      <div class="social-icons">
        <a href="https://www.instagram.com/ponnexfpv" target="_blank" class="icon ico-instagram"></a>
        <a href="https://www.linkedin.com/in/ponnex/" target="_blank" class="icon ico-linkedin"></a>
        <a href="https://github.com/ponnex/" target="_blank" class="icon ico-github"></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class FooterComponent extends Vue {}
</script>
