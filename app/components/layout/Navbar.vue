<script lang="ts" setup>
defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
})

const navigation = getNavigation('home') as Record<string, Navigation>

const route = useRoute()
const localePath = useLocalePath()
</script>

<template>
  <div class="mx-auto my-2 flex w-full items-center justify-center">
    <header class="rounded-full">
      <SpotlightButton
        rounded
        transparent
        :animate="false"
        class="border border-[#48CFCB]/20 dark:border-[#48CFCB]/30 bg-white/80 dark:bg-[#2E2E2E]/80 backdrop-blur-md"
      >
        <nav class="z-10 flex h-[70px] justify-around gap-2 p-1 transition-all duration-300 ease-in-out sm:h-[65px] sm:hover:gap-4">
          <NuxtLink
            v-for="item in navigation"
            :id="item.name.toLowerCase()"
            :key="item.name"
            :aria-label="item.name + ' navigation link'"
            :class="[
              localePath(item.to) === route.path
                ? 'border border-[#48CFCB]/30 bg-[#48CFCB]/10 text-[#229799] dark:text-[#48CFCB] shadow-lg shadow-[#48CFCB]/20'
                : 'text-[#666666] dark:text-[#CCCCCC] hover:text-[#229799] dark:hover:text-[#48CFCB]',
            ]"
            :to="localePath(item.to)"
            class="flex flex-col items-center rounded-full border border-transparent px-4 py-2 transition-all duration-300 ease-in-out hover:border-[#48CFCB]/20 hover:bg-[#48CFCB]/5 dark:hover:bg-[#229799]/10 sm:px-6"
          >
            <UIcon
              :name="item.icon"
              class="size-6 font-light sm:size-5"
            />
            <span class="mt-1 text-xs font-medium">
              {{ item.name }}
            </span>
          </NuxtLink>
        </nav>
      </SpotlightButton>
    </header>
  </div>
</template>
