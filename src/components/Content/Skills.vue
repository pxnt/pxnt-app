<template>
  <div class="skills">
    <Heading headingPart1="TECHNICAL" headingPart2="SKILLSET" />

    <div class="flex flex-wrap gap-4 mt-10">
      <div v-for="skill in skills" :key="skill"
        class="skill-card bg-dark-1 px-4 py-1 rounded-full flex items-center justify-center text-white text-sm max-w-min whitespace-nowrap cursor-pointer hover:bg-[#ab6ffc] hover:font-semibold transition-all duration-300">
        {{ skill }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Heading from '~/components/Content/Heading.vue';

const skills = ['Vue Js', 'GO', 'Javascript', 'Typescript', 'SQL', 'C++', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch', 'Kafka', 'Docker', 'Cassandra', 'AWS'];
</script>

