<template>
	<div class="landing__container">
		<div class="landing__information">
			<div class="landing__section section-1">
				<span class="title">FRONTEND DEVELOPER</span>
				<div class="name">
					<span>Emmanuel</span>
					<span>Francis</span>
					<span>Ramos</span>
				</div>
				<div class="social-icons">
					<a href="https://www.linkedin.com/in/ponnex/" target="_blank" class="icon ico-linkedin"></a>
					<a href="https://github.com/ponnex/" target="_blank" class="icon ico-github"></a>
					<a href="https://www.instagram.com/ponnexfpv" target="_blank" class="icon ico-instagram"></a>
				</div>
			</div>
			<div class="landing__section section-2">
				<span class="title">- ABOUT ME</span>
				<span class="info-2">Making awesome web applications for different industries like Airlines, Banks, Automotive, E-commerce, Marketplace, Arts and Museums, Events, Crypto Space and more.</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class LandingTemplate extends Vue {
}
</script>
