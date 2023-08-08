<template>
	<div class="landing__container">
		<div class="landing__information">
			<div class="landing__section section-1">
				<span>Emmanuel</span>
				<span>Francis</span>
				<span>Ramos</span>
				<div class="social-icons">
					<a href="https://www.linkedin.com/in/ponnex/" target="_blank" class="icon ico-linkedin"></a>
					<a href="https://github.com/ponnex/" target="_blank" class="icon ico-github"></a>
					<a href="https://www.instagram.com/ponnexfpv" target="_blank" class="icon ico-instagram"></a>
				</div>
			</div>
			<div class="landing__section section-2">
				<span class="title">- Introduction</span>
				<span class="info-1">Advanced Front-end Developer.</span>
				<span class="info-2">Turning ideas into usable and optimized web applications.</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'nuxt-property-decorator';
import VueScreen from 'vue-screen';

Vue.use(VueScreen);

@Component
export default class LandingTemplate extends Vue {

	/**
   * Watcher for screen width changes
   */
  @Watch('$screen.width')
  onScreenWidthChange(width: number) {
    this.resizeDiv();
  }

	mounted() {
		let section2El = document.querySelector('.section-2') as HTMLElement;
		section2El.style.opacity = '0';
		this.$nextTick(() => {
			this.resizeDiv();
		})
	}

	/**
	 * Resize Div
	 */
	resizeDiv() {
		let navbarEl = document.querySelector('.navbar-collapse') as HTMLElement;
		let navbarLinkEl = document.querySelector('.header__links') as HTMLElement;
		let section2El = document.querySelector('.section-2') as HTMLElement;
		setTimeout(() => {
			section2El.style.left = `${navbarEl.getBoundingClientRect().x}px`;
			section2El.style.width = `${navbarLinkEl.getBoundingClientRect().width}px`;
			section2El.style.opacity = '100';
		}, 400);
	}
}
</script>
