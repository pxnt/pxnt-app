<template>
  <div class="experience">
    <Heading headingPart1="4+ YEARS OF" headingPart2="EXPERIENCE" />

    <div class="exp-card bg-dark-hover py-6 px-4 mt-10 rounded-lg">
      <div class="company text-2xl font-poppins font-semibold text-white">
        Quizizz
        <span class="position text-sm text-white-1">(SDE2)</span>
      </div>

      <div class="info text-white-1 text-sm mt-4">
        Leading FutureTeacher.AI with the CEO—an AI platform — driving
        product vision and building full system architecture with features like secure cross-domain authentication,
        third-party integrations (Perplexity, OpenAI, Portkey, etc.).<br>
        Owned and scaled a subscription infrastructure handling 2.6M+ RPM, powering global payments, geo-pricing, and
        dynamic paywalls. Built a tiered usage engine and flexible billing flows, directly enabling $1.4M+ annual
        revenue while reducing churn through smart proration and refund mechanisms.
        <br>
        Led 200+ technical interviews, setting a high hiring bar through deep evaluations of algorithms, system design,
        and core CS fundamentals.
      </div>

      <div class="duration mt-4 font-poppins text-sm text-white-1">
        June 2023 - Present
      </div>
    </div>

    <div class="exp-card py-6 px-4 mt-6 rounded-lg">
      <div class="company text-2xl font-poppins font-semibold text-white">
        Quizizz
        <span class="position text-sm text-white-1">(SDE)</span>
      </div>

      <div class="info text-white-1 text-sm mt-4">
        Boosted API Gateway throughput by 6x while cutting infra costs by ~40%, and slashed search latency by 70% with
        deep Elasticsearch tuning. Introduced enterprise-ready subscription models—seat-based, tiered, and one-time
        pricing—unlocking new revenue channels.<br>
        Achieved 18x faster builds for the core monolith (7 min → 23 sec), dramatically accelerating developer
        velocity.<br>
        Led the UI overhaul for Quizizz for Work, elevating the corporate user experience, and improved UX performance
        with –27% CLS via layout caching.<br>
        Stabilized a fragile game rendering pipeline, ensuring smooth performance across complex question types after
        months of production instability.
      </div>

      <div class="duration mt-4 font-poppins text-sm text-white-1">
        Aug 2021 - June 2023
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Heading from '~/components/Content/Heading.vue';
</script>

<style scoped>
@reference "~/style.css";

.exp-card {
  @apply hover:bg-dark-hover transition-all duration-300;
}
</style>