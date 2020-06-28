<template>
  <div class="thankyou">
    <span class="thankyou__heading">Thank you!</span>
		<span class="thankyou__info">The form was submitted successfully, don't forget to check your email.</span>
		<div class="thankyou__contact">
			<span class="thankyou__email">ponnex@gmail.com</span>
			<div class="social-icons">
        <a href="https://www.instagram.com/ponnexfpv" target="_blank" class="icon ico-instagram"></a>
        <a href="https://www.linkedin.com/in/ponnex/" target="_blank" class="icon ico-linkedin"></a>
        <a href="https://github.com/ponnex/" target="_blank" class="icon ico-github"></a>
      </div>
		</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
	layout: 'thankyou'
})
export default class ThankYouPage extends Vue {

}
</script>
