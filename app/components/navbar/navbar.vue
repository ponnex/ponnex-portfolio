<template>
  <ul class="header__links">
    <li class="header-link" :class="{ active: route.path === '/' }" role="presentation">
      <NuxtLink to="/">Portfolio</NuxtLink>
    </li>
    <li class="header-link" :class="{ active: route.path === '/projects' }" role="presentation">
      <NuxtLink to="/projects">Projects</NuxtLink>
    </li>
    <li class="header-link" :class="{ active: route.path === '/resume' }" role="presentation">
      <NuxtLink to="/resume">Resume</NuxtLink>
    </li>
    <a role="presentation" class="theme-toggle header-link icon"
      :class="[{ 'ico-sun': theme === 'default' }, { 'ico-moon': theme === 'light' }]" @click="changeTheme()">
    </a>
  </ul>
</template>

<script setup lang="ts">
const route = useRoute()

const emit = defineEmits<{ themeChanged: [theme: string] }>()

const theme = ref('light')

function changeTheme() {
  theme.value = theme.value !== 'default' ? 'default' : 'light'
  emit('themeChanged', theme.value)
}
</script>
