<template>
  <div class="section-heading font-poppins font-bold text-white">
    <span class="hidden md:inline">
      {{ headingPart1 }} <br>
      <span class="text-purple-primary">
        {{ headingPart2 }}
      </span>
    </span>
    <span class="md:hidden">
      {{ headingPart1 }}
      <span class="text-purple-primary">
        {{ headingPart2 }}
      </span>
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  headingPart1: string;
  headingPart2: string;
}>();
</script>

<style scoped>
@reference '~/style.css';

.section-heading {
  @apply text-2xl md:text-4xl lg:text-6xl text-center md:text-start transition-all duration-300;
}
</style>
