<script lang="ts">
import { RouterLink } from "vue-router";
import { NAV_LINKS } from "@/data/NavLink";

export default {
  data() {
    return { links: NAV_LINKS };
  },
};

// export default Side
</script>

<template>
  <div class="sidebar">
    <div class="logo">
      <RouterLink to="/" class="logo__link">
        <img src="@/assets/images/logo.png" class="logo__image" />
      </RouterLink>
    </div>
    <ul class="sidebar__list">
      <li v-for="link in links" :key="link.id" class="sidebar__item"></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  padding-top: var(--span-m);
  width: 72px;
  min-height: calc(100vh - 80px);
  background: linear-gradient(
    162.34deg,
    #161a42 22.61%,
    rgba(22, 26, 66, 0) 118.29%
  );
  border-radius: 16px;
}

.logo {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__link {
    display: flex;
    align-items: center;
    justify-items: center;
  }

  &__image {
    height: 48px;
  }
}
</style>
