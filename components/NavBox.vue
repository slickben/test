<template>
  <nuxt-link :to="link" class="text-center">
    <div>
      <div class="mx-auto h-20 w-20 icon-shadow p-1 ">
        <slot></slot>
      </div>
      <p class="text-gray-100 pt-1 text-xs">{{ name }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'NavBox',
  props: {
    link: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    css: {
      type: String,
      required: true,
    },
  },
}
</script>
