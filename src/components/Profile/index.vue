<template>
  <div
    class="relative w-full md:min-w-[343px] max-h-max flex flex-col items-center px-6 py-7 bg-dark-secondary rounded-xl">
    <Logo class="absolute -top-7 -left-7 w-20 h-20" />
    <div class="profile w-60 h-70 rounded-lg">
      <img
        src="/src/assets/profile_img.webp"
        alt="Profile" 
        class="w-full h-full object-cover rounded-lg"
        loading="eager"
        fetchpriority="high"
        decoding="async">
    </div>

    <div class="name mt-6 text-4xl whitespace-nowrap font-semibold text-white font-outfit">
      Prashant Singh
    </div>

    <div class="description mt-2 text-lg text-white-faded font-normal font-outfit leading-[16px]">
      Full Stack Engineer
    </div>
    <div class="location mt-2 text-lg text-white-faded font-normal font-outfit leading-[16px]">
      <span class="icon inline-block">
        <svg class="w-3 h-3" fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 395.71 395.71" xml:space="preserve" stroke="#ffffff">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <path
                d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z">
              </path>
            </g>
          </g>
        </svg>
      </span>
      Bengaluru, India
    </div>


    <ProfileContact class="mt-5" />

    <div class="desc mt-10 italic text-center text-white-faded font-normal font-outfit leading-[16px]">
      A Software Engineer who has developed countless innovative solutions.
    </div>

    <a href="mailto:prashantsingh3553@gmail.com">
      <Button title="Let's talk" class="mt-5" />
    </a>
  </div>
</template>

<script setup lang="ts">
import ProfileContact from '~/components/Profile/ProfileContact.vue';
import Button from '~/components/Button.vue';
import Logo from '~/components/Logo.vue';
</script>
