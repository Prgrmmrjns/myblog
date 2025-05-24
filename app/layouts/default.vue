<template>
  <div class="min-h-screen bg-[#F5F5F5] dark:bg-[#424242] text-[#424242] dark:text-[#F5F5F5]">
    <SettingsLanguageToggle class="fixed right-1 z-50 top-1" />
    <LayoutNavbar class="fixed bottom-0 z-50 flex sm:bottom-auto sm:top-0" />
    <div class="sm:mt-[50px]">
      <slot />
    </div>
    <LayoutFooter />
  </div>
</template>
