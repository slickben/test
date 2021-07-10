<template>
  <div v-show="status" class="fixed inset-0 flex justify-end items-center">
    <div class="flex flex-col h-full">
      <div class="flex-none h-20"></div>
      <div :class="classes" class="bg-white flex-grow h-full overflow-y-auto">
        <div class="p-5 border-b">
          <slot name="head"></slot>
        </div>
        <div>
          <slot></slot>
        </div>
      </div>
      <div class="flex-none h-20"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classes: String,
    status: Boolean,
  },
}
</script>