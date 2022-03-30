<template>
  <div
    class="h-screen bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100"
  >
    <div class="flex flex-col gap-4 p-5">
      <BaseInput type="text" label="Text" />
      <BaseInput type="number" label="Number" />
      <BaseInput type="email" label="Email" />
      <BaseInput type="password" label="Password" />
      <BaseInput type="date" label="Date" />
      <BaseInput type="tel" label="Telephone" />
      <BaseInput type="url" label="URL" />
      <BaseInput type="search" label="Search" />
    </div>
  </div>
</template>

<script>
import BaseInput from "@patchui/productcl/components/BaseInput/BaseInput.vue";
export default {
  components: {
    BaseInput,
  },
};
</script>
