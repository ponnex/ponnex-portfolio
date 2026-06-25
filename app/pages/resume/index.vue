<template>
  <div ref="resumeRef" class="resume">
    <ClientOnly>
      <VuePdfEmbed :source="source" :width="pdfWidth" />
      <template #fallback>
        <span class="loading">Loading pdf...</span>
      </template>
    </ClientOnly>
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

<script setup lang="ts">
import VuePdfEmbed from 'vue-pdf-embed'

const source = '/ramos_resume.pdf'
const MAX_WIDTH = 1600

const resumeRef = ref<HTMLElement | null>(null)
const pdfWidth = ref(MAX_WIDTH)

const { width: windowWidth } = useWindowSize()

function resizePdf() {
  const el = resumeRef.value
  if (!el) return
  const styles = window.getComputedStyle(el)
  const padding = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight)
  const available = el.clientWidth - padding
  pdfWidth.value = Math.min(available > 0 ? available : MAX_WIDTH, MAX_WIDTH)
}

// Recompute whenever the viewport width changes.
watch(windowWidth, () => resizePdf())

onMounted(() => {
  nextTick(resizePdf)
})
</script>
