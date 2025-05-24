<template>
  <div class="content">
    <div
      class="profile text-white font-poppins text-4xl md:text-6xl lg:text-8xl text-center md:text-start font-bold transition-all duration-300">
      SOFTWARE
      <span class="text-purple-primary">ENGINEER</span>
    </div>

    <div
      class="description mt-5 font-poppins text-white-gray text-sm md:text-base lg:text-lg text-center md:text-start transition-all duration-300">
      Passionate about creating intuitive and engaging <br> user experiences.
      Specialize in transforming ideas <br> into beautifully crafted products.
    </div>

    <div class="actions w-full flex gap-2 mt-10 justify-center md:justify-start">
      <a 
        href="https://drive.google.com/file/d/1pO0DFVlQXuOrIzLYAxz6-lLr47T6fcGB/view?usp=sharing" 
        download
        target="_blank"
        class="w-full max-w-45"
      >
        <Button title="Download CV" />
      </a>
      <a 
        href="mailto:prashantsingh3553@gmail.com"
        class="w-full max-w-45"
      >
        <Button title="Contact me" theme="secondary" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '~/components/Button.vue';
</script>