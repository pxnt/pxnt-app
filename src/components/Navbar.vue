<template>
  <div class="max-w-86 flex justify-between items-center px-5 h-12 rounded-xl bg-dark-secondary">

    <div class="home nav-item group" :class="{ 'bg-purple-primary': isActive('home') }">
      <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="rgb(255, 255, 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>

      <div class="label">Home</div>
    </div>

    <div class="projects nav-item group" :class="{ 'bg-purple-primary': isActive('projects') }">
      <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="rgb(255, 255, 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
      </svg>
      <div class="label">Projects</div>
    </div>

    <div class="skills nav-item group" :class="{ 'bg-purple-primary': isActive('skills') }">
      <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="rgb(255, 255, 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path
          d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z">
        </path>
      </svg>
      <div class="label">Skills</div>
    </div>

    <div class="jobs nav-item group" :class="{ 'bg-purple-primary': isActive('jobs') }">
      <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="rgb(255, 255, 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
      <div class="label">Jobs</div>
    </div>

    <div class="contact nav-item group" :class="{ 'bg-purple-primary': isActive('contact') }">
      <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="rgb(255, 255, 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
      <div class="label">Contact</div>
    </div>

  </div>
</template>

<script setup lang="ts">
import useDevice from '~/composables/useDevice';


const { isTablet } = useDevice()

const isActive = (item: string) => {
  return item === 'home'
}
</script>

<style scoped>
@reference "~/style.css";

.nav-icon {
  @apply w-5 h-5;
}

.nav-item {
  @apply relative w-9 h-9 flex items-center justify-center rounded;
  @apply hover:bg-purple-primary;
}

.label {
  @apply absolute -bottom-9 text-xs text-white bg-dark-secondary rounded px-2 py-1 shadow-lg;
  @apply opacity-0 origin-top transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-1;

}
</style>