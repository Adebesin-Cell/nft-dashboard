<script lang="ts">
import sideBarVue from "../sidebar/side-bar.vue";

export default {
  components: {
    sideBarVue,
  },
};
</script>

<template>
  <main class="dashboard">
    <sideBarVue />
  </main>
</template>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  gap: var(--span-m);
  padding: var(--span-l) var(--span-m);
}
</style>
