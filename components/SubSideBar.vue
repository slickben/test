<template>
  <div>
    <h2 class="p-5 text-2xl text-primary-900 font-semibold">{{ title }}</h2>
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