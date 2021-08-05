<template>
  <div class="font-sans">
    <Nuxt />
  </div>
</template>

<script>
export default {
    middleware: 'load-taxnet'
}
</script>