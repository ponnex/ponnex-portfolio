<template>
  <div class="theme" :class="`theme--${currentTheme}`">
    <div class="base">
      <div class="base__page">
        <div>
          <main class="body">
            <nuxt />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Default extends Vue {
	/**
	 * Get current theme
	 */
	get currentTheme() {
		return this.$route.query.theme ? this.$route.query.theme : 'default';
	}
}
</script>
