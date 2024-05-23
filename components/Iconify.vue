<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../libs'
interface Props {
  name: string
  class?: HTMLAttributes['class']
}
defineOptions({
  name: 'Iconify',
})
const props = withDefaults(defineProps<Props>(), {
  class: 'w-5 h-5'
})
</script>

<template>
  <span :class="cn(props.name, props.class)"></span>
</template>
