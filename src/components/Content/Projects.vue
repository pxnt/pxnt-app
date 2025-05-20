<template>
  <div class="projects">
    <Heading headingPart1="RECENT" headingPart2="PROJECTS" />

    <a href="https://github.com/pxnt/distributed-file-storage-go" target="_blank">
      <div
        class="project-card group relative py-6 px-4 mt-10 rounded-lg hover:bg-dark-hover transition-all duration-300 cursor-pointer">

        <div
          class="link absolute top-6 right-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300">
          <svg class="w-5 h-5 -rotate-45 text-purple-primary" xmlns="http://www.w3.org/2000/svg" focusable="false"
            viewBox="0 0 24 24" style="user-select: none; display: inline-block; flex-shrink: 0; fill: currentColor;">
            <path d="M15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"></path>
          </svg>
        </div>

        <div class="project-name text-2xl max-w-11/12 font-poppins font-semibold text-white">
          Distributed File Storage System - Go
        </div>

        <div class="info text-white-1 text-sm mt-4">
          • A decentralized, peer-to-peer file storage system with CAS (content-addressable storage) using SHA-1
          hashing.
          <br>
          • Built custom TCP-based peer discovery and file broad-casting.
          <br>
          • Enabled dynamic node participation and redundant file replication.
        </div>
      </div>
    </a>

    <a href="https://github.com/pxnt" target="_blank">
      <div
        class="project-card group relative py-6 px-4 mt-6 rounded-lg hover:bg-dark-hover transition-all duration-300 cursor-pointer">

        <div
          class="link absolute top-6 right-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300">
          <svg class="w-5 h-5 -rotate-45 text-purple-primary" xmlns="http://www.w3.org/2000/svg" focusable="false"
            viewBox="0 0 24 24" style="user-select: none; display: inline-block; flex-shrink: 0; fill: currentColor;">
            <path d="M15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"></path>
          </svg>
        </div>

        <div class="project-name text-xl max-w-11/12 font-poppins font-semibold text-white">
          Chain Reaction Multiplayer Game - Nodejs
        </div>

        <div class="info text-white-1 text-sm mt-4">
          • Real-time Chain Reaction game with Frontend and Backend separation.
          <br>
          • Synchronized gameplay and room management using Socket.io, supporting reconnects, animations, and win
          conditions.
          <br>
          • Achieved seamless sub-100ms real-time synchronization latency.
        </div>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import Heading from '~/components/Content/Heading.vue';
</script>
