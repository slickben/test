<template>
  <div class="fixed inset-y-0 right-0 flex justify-end items-center z-20">
    <div class="flex flex-col h-full">
      <div class="flex-none h-20"></div>
      <div :class="classes" class="bg-white flex-grow h-full overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary-200 scrollbar-track-tertiary-100">
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
  },
}
</script>