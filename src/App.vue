<template>
  <div :class="{ dark: global.darkMode }" class="transition-colors">
    <div
      class="flex flex-wrap items-center justify-between p-2 border-b shadow bg-neutral-50 border-neutral-600"
    >
      <div class="flex gap-3">
        <router-link
          :class="
            $route.name === page.name ? 'text-primary-500' : 'text-neutral-900'
          "
          v-for="page in pages"
          :key="page"
          :to="page.path"
          >{{ page.name.replace(/-/g, " ") }}</router-link
        >
      </div>
      <button
        :class="
          global.darkMode
            ? 'bg-neutral-300 text-neutral-900'
            : 'bg-neutral-900 text-neutral-50'
        "
        class="p-2 rounded"
        @click="global.toggleDarkMode(!global.darkMode)"
      >
        {{ global.darkMode ? "Light Mode" : "Dark Mode" }}
      </button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import pages from "~pages";
import { useGlobalStore } from "./stores/global";
const global = useGlobalStore();
</script>
