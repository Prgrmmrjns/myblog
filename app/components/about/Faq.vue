<script setup lang="ts">
import { withLeadingSlash } from 'ufo'
import type { Collections } from '@nuxt/content'

const route = useRoute()
const { locale } = useI18n()

const slug = computed(() => withLeadingSlash(String(route.params.slug)))
const { data: faq } = await useAsyncData('faq-' + slug.value, async () => {
  const collection = ('faq_' + locale.value) as keyof Collections
  return await queryCollection(collection).first() as Collections['faq_en'] | Collections['faq_fr']
}, {
  watch: [locale],
})

const items = computed(() => {
  return faq.value?.faqQuestions.map((faq) => {
    return {
      label: faq.title,
      key: faq.title.toLowerCase(),
      questions: faq.questions,
    }
  })
})

const activeTab = ref(0)

const ui = {
  root: 'flex flex-col items-center gap-4 w-full',
  list: 'relative flex bg-transparent dark:bg-transparent gap-2 flex-wrap justify-center',
  indicator: 'absolute top-[4px] duration-200 ease-out focus:outline-none rounded-full bg-white/10 dark:bg-neutral-900',
  trigger: [
    'relative inline-flex items-center justify-center flex-shrink-0 focus:outline-none transition-colors duration-200 ease-out border-white/10 border-2',
    'px-3 py-2 font-medium rounded-full',
    'hover:bg-neutral-900/80',
    'data-[state=active]:text-neutral-900 dark:data-[state=active]:text-white',
    'data-[state=inactive]:text-neutral-500 dark:data-[state=inactive]:text-neutral-400',
  ],
  label: 'truncate',
  content: 'mt-4 w-full',
  panel: 'w-full focus:outline-none'
}

// Define custom styles for the tab buttons
const tabButtonStyles = {
  base: 'rounded-full border-2 border-white/10 px-4 py-1 font-medium transition-all duration-300 transform',
  active: 'bg-gradient-to-r from-indigo-500/50 to-purple-500/50 text-white shadow-lg scale-105 border-indigo-400/30',
  inactive: 'bg-transparent text-neutral-300',
  hover: 'hover:bg-white/10 hover:text-white hover:shadow-md hover:scale-103',
}
</script>

<template>
  <div class="flex flex-col items-center justify-center space-y-8 w-full sm:px-20 md:px-30">
    <div class="flex flex-col items-center justify-center gap-2">
      <h3 class="font-newsreader italic text-white-shadow text-4xl">
        {{ faq!.title }}
      </h3>
      <p class="text-center text-sm font-medium text-muted">
        {{ faq!.subtitle }}
      </p>
    </div>
    
    <!-- Custom tab navigation -->
    <div class="w-full">
      <div class="mb-6 flex flex-wrap justify-center gap-3">
        <button
          v-for="(item, index) in items"
          :key="index"
          :class="[
            tabButtonStyles.base,
            activeTab === index ? tabButtonStyles.active : tabButtonStyles.inactive,
            tabButtonStyles.hover
          ]"
          @click="activeTab = index"
        >
          {{ item.label }}
        </button>
      </div>
      
      <!-- Display the content for the active tab -->
      <div 
        v-for="(item, index) in items" 
        :key="index" 
        v-show="activeTab === index"
        class="transition-opacity duration-300"
      >
        <UAccordion
          trailing-icon="lucide:plus"
          :items="item.questions"
          :ui="{
            item: 'mb-2 group px-4 transform-gpu rounded-xl border border-white/10 bg-white/5 transition duration-500 will-change-transform hover:bg-white/[0.075]',
            trailingIcon: 'group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-135',
            panel: 'p-4',
            content: 'text-neutral-200',
            title: 'text-white font-medium',
          }"
        />
      </div>
    </div>
  </div>
</template>