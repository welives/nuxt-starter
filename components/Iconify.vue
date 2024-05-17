<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../lib'
interface Props {
  iconName: string
  class?: HTMLAttributes['class']
}
defineOptions({
  name: 'Iconify',
})
const props = defineProps<Props>()
const icon = computed(() => {
  return props.iconName ? `icon-[${props.iconName}]` : ''
})
</script>

<template>
  <span :class="cn(icon, props.class)"></span>
</template>
