<template>
  <nuxt-link :to="link" class="text-center">
    <div class="group">
      <div :class="css" class="mx-auto h-20 w-20 icon-shadow p-1 group-hover:shadow-none transition-shadow duration-1000 ease-in-out ">
        <slot></slot>
      </div>
      <p class="text-gray-100 pt-1 text-xs transform hover:scale-125 transition duration-1000 ease-in-out ">{{ name }}</p>
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
