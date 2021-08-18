<template>
  <nuxt-link :to="link" class="text-center">
    <div class="group text-white">
      <div :class="css" class="mx-auto h-20 w-20 group-hover:shadow-none transition-shadow duration-1000 ease-in-out rounded flex justify-center items-center">
        <slot></slot>
      </div>
      <p class=" pt-1 tracking-wider text-xs font-normal truncate px-2">{{ name }}</p>
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
