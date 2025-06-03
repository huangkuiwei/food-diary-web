<script setup></script>

<template>
  <div class="pc-layout">
    <RouterView />
  </div>
</template>

<style scoped lang="less">
.pc-layout {
  height: 100%;
  line-height: 1.15;
  min-width: 1300px;
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PcLayout',
});
</script>
