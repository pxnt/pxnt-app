<template>
  <div ref="scrollContainer" class="relative bg-dark-primary w-screen h-screen overflow-y-scroll"
    @scroll="handleScroll">
    <div
      class="container w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 pt-10 md:pt-20 pb-20 px-6 md:px-10 transition-all duration-300">

      <!-- <Navbar class="mx-auto sticky top-0 z-10" /> -->

      <Transition name="fade-in-down-profile" appear>
        <Profile class="md:sticky md:top-10" />
      </Transition>
      <Transition name="fade-in-down-content" appear>
        <Content class="" />
      </Transition>

    </div>
  </div>
</template>

<script setup lang="ts">
import Profile from '~/components/Profile/index.vue'
import Content from '~/components/Content/index.vue'
import { ref, onMounted } from 'vue'
import useSessionTracking from '~/composables/useSessionTracking'

const { addSessionTracking } = useSessionTracking()

const scrollContainer = ref(null)
const minHeight = 30 // px
const maxHeight = 150 // px

// Handle scroll event to update scrollbar height
const handleScroll = () => {
  if (!scrollContainer.value) return
  
  const { scrollTop, scrollHeight, clientHeight } = scrollContainer.value
  const scrollPercentage = scrollTop / (scrollHeight - clientHeight)
  
  // Calculate height based on scroll position (linear interpolation)
  const newHeight = minHeight + (maxHeight - minHeight) * scrollPercentage
  
  // Update the CSS variable
  document.documentElement.style.setProperty('--scrollbar-height', `${newHeight}px`)
}

onMounted(() => {
  // Set initial scrollbar height
  document.documentElement.style.setProperty('--scrollbar-height', `${minHeight}px`)

  addSessionTracking();
})
</script>

<style>
/* Fade In Down Profile */
.fade-in-down-profile-enter-active {
  transition: all 0.4s cubic-bezier(0.27, 0, 0.51, 1);
}

.fade-in-down-profile-leave-active {
  transition: all 0.4s cubic-bezier(0.27, 0, 0.51, 1);
}

.fade-in-down-profile-enter-from,
.fade-in-down-profile-leave-to {
  opacity: 0.001;
  transform: translateY(-20px);
}

.fade-in-down-profile-enter-to,
.fade-in-down-profile-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* Fade In Down Content */
.fade-in-down-content-enter-active {
  transition: all 0.5s cubic-bezier(0.44, 0, 0.56, 1);
  transition-delay: 0.2s;
}

.fade-in-down-content-leave-active {
  transition: all 0.5s cubic-bezier(0.44, 0, 0.56, 1);
}

.fade-in-down-content-enter-from,
.fade-in-down-content-leave-to {
  opacity: 0.001;
  transform: translateY(-20px);
}

.fade-in-down-content-enter-to,
.fade-in-down-content-leave-from {
  opacity: 1;
  transform: translateY(0);
}


/* Scrollbar */
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-thumb {
  background: -webkit-linear-gradient(
    top,
      rgba(24, 204, 252, 0) 0%,
      #18CCFC 50%,
      #6344F5 70%,
      #AE48FF 100%);
      
  background-size: cover, 16px 16px;

  border-radius: 8px;
  position: relative;
  min-height: 30px;
  border-radius: 0.1rem;
  transition: height 0.1s ease;
}
</style>