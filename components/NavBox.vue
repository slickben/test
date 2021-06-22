<template>
  <nuxt-link :to="link" class="text-center">
    <div>
      <span
        :class="css"
        class="
          py-4
          px-5
          text-white
          rounded-md
          mx-auto
          w-24
          h-24
          flex
          items-center
          justify-center
          hover:shadow-xl
        "
      >
        <div
          class="shadow-2xl"
          v-html="$feathericons[icon].toSvg({ width: 45, height: 45 })"
        ></div>
      </span>
      <p class="font-bold text-gray-100 pt-1 text-sm">{{ name }}</p>
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
    icon: {
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
