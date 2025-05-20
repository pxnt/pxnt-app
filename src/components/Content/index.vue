<template>
  <div class="content flex flex-col gap-12 md:gap-20">
    <Info />
    <div class="divider border-t-1 border-dark-1"></div>
    <Experience />
    <div class="divider border-t-1 border-dark-1"></div>
    <Skills />
    <div class="divider border-t-1 border-dark-1"></div>
    <Projects />
    <div class="divider border-t-1 border-dark-1"></div>
    <Contact />
  </div>
</template>

<script setup lang="ts">
import Info from '~/components/Content/Info.vue';
import Experience from '~/components/Content/Experience.vue';
import Skills from '~/components/Content/Skills.vue';
import Projects from '~/components/Content/Projects.vue';
import Contact from '~/components/Content/Contact.vue';
</script>
