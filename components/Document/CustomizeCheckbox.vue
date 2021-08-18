<template>
    <div class="flex items-center justify-end py-6">
        <p class="pr-2 text-tertiary-500 text-sm">{{ label }}:</p>
        <div class="cursor-pointer rounded-full relative shadow-sm">
            <input v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)" type="checkbox" :name="id" :id="id" class="focus:outline-none checkbox w-8 h-8 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer" />
            <label :for="id" class="toggle-label dark:bg-gray-700 block w-32 h-10 overflow-hidden rounded-full bg-gray-300 cursor-pointer py-2 px-3 text-white"></label>
        </div>
    </div>
</template>

<script>
export default {
    props: ['label', 'id', 'value']
}
</script>