<template>
  <img
    class="k-music-icon"
    :src="`/icons/${props.name}.svg`"
    :style="`width: ${props.size}px; height: ${props.size}px;`"
  />
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  size: {
    default: 32,
  },
  name: {
    required: true,
    type: String,
  },
});
</script>

<style lang="scss">
.k-music-icon {
  display: block;
}
</style>
