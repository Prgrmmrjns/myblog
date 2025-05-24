<script setup lang="ts">
const { profile } = useAppConfig()
</script>

<template>
  <div class="flex justify-center">
    <SpotlightCard
      mode="after"
      from="rgba(255,255,255,0.1)"
      :size="400"
      class="group hidden w-64 rounded-2xl border border-white/10 bg-white/5 p-2 pb-4 sm:flex"
    >
      <div class="relative">
        <NuxtImg
          width="256"
          :src="profile.picture"
          class="relative size-64 rounded-xl object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
          alt="Profile Picture"
          aria-label="Profile Picture"
        />
      </div>
    </SpotlightCard>
  </div>
</template>
