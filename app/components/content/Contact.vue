<script setup lang="ts">
import FlyingLetterAnimation from '../FlyingLetterAnimation.vue'

const { profile, socials } = useAppConfig()
const { t } = useI18n()

</script>

<template>
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20">
    <h1 class="font-newsreader italic text-white-shadow text-center text-4xl">
      <slot
        name="title"
        mdc-unwrap="p"
      />
    </h1>
    <h2 class="text-center text-lg font-extralight italic text-muted">
      <slot
        name="subtitle"
        mdc-unwrap="p"
      />
    </h2>
    
    <!-- Flying Letter Animation -->
    <FlyingLetterAnimation />
    
    <Divider class="mb-8 mt-2" />
    
    <div class="flex flex-col items-center justify-center gap-6">
      <!-- Contact Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        
        <!-- LinkedIn Button -->
        <UButton
          size="lg"
          variant="outline"
          color="primary"
          class="flex-1"
          :to="socials.linkedin"
          external
          target="_blank"
        >
          <UIcon name="simple-icons:linkedin" class="mr-2" />
          LinkedIn
        </UButton>
      </div>
      
      <div class="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <!-- GitHub Button -->
        <UButton
          size="lg"
          variant="outline"
          color="primary"
          class="flex-1"
          :to="socials.github"
          external
          target="_blank"
        >
          <UIcon name="simple-icons:github" class="mr-2" />
          GitHub
        </UButton>
      </div>
      
      <!-- Email Display -->
      <div class="mt-6 text-center">
        <p class="text-sm text-muted mb-2">Or reach me directly at:</p>
        <p class="text-lg font-medium text-primary">jwolber@ukaachen.de</p>
      </div>
    </div>
  </section>
</template>
