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
const props = defineProps<Props>()
</script>

<template>
  <span :class="cn(props.name, props.class)"></span>
</template>
