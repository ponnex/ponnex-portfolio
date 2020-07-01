<template>
  <div class="footer__container">
    <div class="footer__information">
      <div class="footer__section section-1">
        <div class="section-title">
          <span>Got a project?</span>
          <span>Let's talk.</span>
        </div>
        <div>
          <p
            class="section-description"
          >Sed ut perspiciatis unde commis iste natus error sit voluptatem accussantium.</p>
        </div>
        <a href="mailto:hello@ponnex.dev" class="contact-container">
          <span class="contact-email">hello@ponnex.dev</span>
          <span class="icon ico-email"></span>
        </a>
      </div>
      <div class="footer__section section-2">
        <form
          ref="estimateForm"
          target="_blank"
          :action="`https://formsubmit.co/${apiDefaults.emailMask}`"
          method="POST"
          enctype="multipart/form-data"
          @submit.prevent="onSubmit"
        >
          <div class="section-title">
            <span>Estimate your project?</span>
            <span>Let me know here.</span>
          </div>
          <div>
            <span>What's your name?</span>
            <input class="text-input" type="text" name="name" required />
          </div>
          <div>
            <span>Your fancy email</span>
            <input class="text-input" type="text" name="email" required />
          </div>
          <div class="attachment">
            <span>Tell me about your project</span>
            <button type="submit" class="contact-submit-btn">
              <span class="icon ico-arrow"></span>
            </button>
            <div class="upload-wrapper">
              <span class="icon ico-attachment"></span>
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                :value="`${apiDefaults.thankYouPageUrl}?theme=${currentTheme}`"
              />
              <input type="hidden" name="_subject" value="Web Portfolio: New submission!" />
              <input
                type="hidden"
                name="_autoresponse"
                value="I've received your submission from by web portfolio, I'll get back to you asap, thank you!"
              />
              <input
                type="file"
                name="attachment"
                accept="image/png, image/jpeg, application/pdf, .rar.psd, application/zip"
              />
            </div>
          </div>
          <recaptcha @error="onError" @success="onSuccess" @expired="onExpired" />
        </form>
      </div>
    </div>
    <div class="footer__social">
      <a href="https://floppy-bird-pwa.web.app/" target="_blank" class="logo icon ico-hero"></a>
      <div class="salutation">
        <span>&lt;/&gt;</span>
        <span>with &#x1f496; by Emmanuel Francis Ramos Jr. © 2020</span>
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
import recaptcha from "@nuxtjs/recaptcha";
const api = require("@/environment/defaults.json");

@Component
export default class FooterComponent extends Vue {
  /**
   * Return default config data
   */
  get apiDefaults() {
    return api;
  }

  /**
   * Get current theme
   */
  get currentTheme() {
    return "default";
  }

  onError(error: any) {
    console.log("Error happened:", error);
  }

  async onSubmit() {
    try {
      const token = await this.$recaptcha.getResponse();
      await this.$recaptcha.reset();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log("Login error:", error);
    }
  }

  onSuccess(token: any) {
    let estimateForm = this.$refs.estimateForm as HTMLFormElement;
    estimateForm.submit();
  }

  onExpired() {
    console.log("Session Expired");
  }
}
</script>
