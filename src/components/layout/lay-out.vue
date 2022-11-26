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
  padding: var(--span-l) var(--span-s);
}
</style>
