<template>
    <div class="flex items-center pb-6 mr-3">
        <input  :id="id" :name="id" class="w-3 h-3 mr-2" :type="type" />
        <label :for="id" class="text-xs text-tertiary-800">{{ label }}</label>
    </div>
</template>

<script>
export default {
    props: ['id', 'label', 'value', 'type']
}
</script>