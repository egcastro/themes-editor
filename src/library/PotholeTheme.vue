<template>
  <div class="h-full bg-black">
    <div class="grid w-full gap-4 px-8 pt-5 pb-16 lg:grid-cols-2">
      <div class="flex flex-col w-full h-screen gap-3">
        <div
          class="relative flex flex-col items-center justify-between w-full mb-5 md:flex-row"
        >
          <!-- Logo -->
          <img
            :width="project.logo.width"
            :src="project.logo.url"
            class="flex self-start max-w-max"
          />

          <!-- Navigation Section -->
          <div
            class="box-border flex flex-wrap justify-between p-1 rounded-lg bg-neutral-700 md:justify-end"
          >
            <a
              v-for="page in project.nav"
              class="px-4 py-2 text-sm font-semibold text-center rounded-lg cursor-pointer w-max"
              :key="page"
              :class="
                navSelected(
                  page.url,
                  'text-neutral-900 bg-white',
                  'text-neutral-100 bg-transparent hover:text-neutral-50'
                )
              "
              :title="page.title"
              :href="page.url"
            >
              {{ page.title }}
            </a>
          </div>
        </div>

        <!-- Left Section -->
        <div class="flex flex-col gap-16 h-max text-neutral-50">
          <slot></slot>
        </div>
      </div>
      <div
        class="relative z-20 w-full pt-6 bg-white rounded-3xl lg:mt-0 md:mt-10 sm:mt-10"
      >
        <div class="mb-6 rounded-3xl">
          <div
            class="flex flex-wrap items-center justify-between w-full gap-4 px-5 h-max"
          >
            <!-- Right filters header section -->
            <slot name="filters"></slot>
          </div>
          <div
            class="flex flex-col flex-wrap w-full gap-4 pl-5 pr-3 mt-4 h-max scroll-section"
          >
            <div
              class="max-h-screen overflow-scroll overflow-x-hidden chart-tab"
            >
              <!-- Right Section -->
              <slot name="content"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-section .chart-tab ::-webkit-scrollbar-track {
  border-radius: 10px;
  margin: 10px;
}

.scroll-section .chart-tab::-webkit-scrollbar {
  width: 6px;
}

.scroll-section .chart-tab::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: hsla(0, 0%, 0%, 0.04);
}
</style>
