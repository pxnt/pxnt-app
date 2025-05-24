<template>
  <div :class="bgColor" class="button relative flex items-center justify-center rounded-lg max-w-45 w-full h-11 cursor-pointer">
    <span :class="textColor" class="font-outfit">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  title: string;
  theme?: 'primary' | 'secondary';
}>(), {
  theme: 'primary',
})

const bgColor = computed(() => {
  return props.theme === 'primary' ? 'bg-purple-primary' : 'bg-white';
})

const textColor = computed(() => {
  return props.theme === 'primary' ? 'text-white' : 'text-purple-primary';
})

</script>

<style scoped>
.button:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: black;
  transition: all 0.2s ease-in-out;
}

.button:hover:after {
  opacity: 0.2;
}
</style>