<template>
  <div class="h-full overflow-y-auto">
    <h2 class="pl-8 pt-5 xl:p-5 text-lg xl:text-2xl text-primary-900 font-semibold">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>