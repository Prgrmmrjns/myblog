<template>
  <section class="relative pt-12">
    <!-- grid -->
    <div class="pointer-events-none absolute inset-0 bg-center bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)]" />

    <div class="relative mx-auto flex max-w-7xl flex-col justify-center gap-4 px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
      <!-- spotlight -->
      <div
        class="absolute -top-8 left-1/2 size-72 -translate-x-1/2 rounded-full bg-white/25 blur-[120px] lg:-top-8 lg:size-[32rem] lg:blur-[200px]"
      />

      <div class="z-20 flex flex-col items-center justify-center">
        <!-- title -->
        <div
          style="--stagger: 1; --delay: 10ms"
          data-animate
        >
          <h1 class="mx-auto font-medium text-center text-pretty bg-gradient-to-b from-white/90 to-white/30 bg-clip-text text-3xl text-transparent lg:max-w-3xl lg:text-4xl">
            <slot
              name="hero_title"
              mdc-unwrap="p"
            />
          </h1>

          <!-- subtitle -->
          <h2 class="mx-auto mt-4 max-w-xl text-center text-lg antialiased text-white/60">
            <slot
              name="hero_subtitle"
              mdc-unwrap="p"
            />
          </h2>
        </div>

        <!-- coffee animation -->
        <div
          style="--stagger: 0; --delay: 5ms"
          data-animate
          class="my-6"
        >
          <HomeCoffeeAnimation />
        </div>

        <!-- profile picture -->
        <div class="mt-6">
          <HomeProfilePicture />
        </div>

        <Divider class="my-9" />
      </div>
    </div>
  </section>
</template>
