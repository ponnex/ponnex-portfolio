<template>
  <div class="footer__container">
    <div class="footer__information">
      <div class="footer__section section-1">
        <div class="section-title">
          <span>Take a Coffee &amp;</span>
          <span>Chat with me.</span>
        </div>
        <div>
          <p
            class="section-description"
          >If you have a good opportunity that matches my skills then don't hesitate to contact me.</p>
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
          class="form"
        >
          <div class="section-title">
            <span>Got a project?</span>
            <span>Let's talk.</span>
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
            <div class="upload-wrapper">
              <span class="icon ico-attachment"></span>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
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
          <textarea required></textarea>
          <button type="submit" class="contact-submit-btn">Submit</button>
          <recaptcha @error="onError" @success="onSuccess" @expired="onExpired" />
        </form>
      </div>
    </div>
    <div class="footer__social">
      <n-link tag="a" to="/" class="logo icon ico-hero"></n-link>
      <div class="salutation">
        <a href="https://floppy-bird-pwa.web.app/" target="_blank" class="easegg"><span>&lt;/&gt;</span></a>
        <span>with &#x1f496; by Emmanuel Francis Ramos 2023</span>
      </div>
      <div class="social-icons">
        <a href="https://www.linkedin.com/in/ponnex/" target="_blank" class="icon ico-linkedin"></a>
        <a href="https://github.com/ponnex/" target="_blank" class="icon ico-github"></a>
        <a href="https://www.instagram.com/ponnexfpv" target="_blank" class="icon ico-instagram"></a>
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
    return "light";
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
