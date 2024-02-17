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
				<social-icons></social-icons>
			</div>
			<div class="landing__section section-2">
				<span class="info-2">Making awesome web applications for different industries like Airlines, Banks, Automotive, E-commerce, Marketplace, Arts and Museums, Events, Crypto Space and more.</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import SocialIcons from '@/components/social-icons/social-icons.vue';

@Component({
	components: {
		SocialIcons
	}
})
export default class LandingTemplate extends Vue {
}
</script>
