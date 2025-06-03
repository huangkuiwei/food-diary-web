<script setup></script>

<template>
  <div class="mobile-layout">
    <RouterView />
  </div>
</template>

<style scoped lang="less">
.mobile-layout {
  height: 100%;
  max-width: 420px;
  margin: 0 auto;
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MobileLayout',
});
</script>
