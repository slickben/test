<template>
    <div class="flex flex-col w-full">
        <label :for="id" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">{{ lable }} <span v-show="isRequired" class="text-red-500">*</span></label>
        <select v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)" :id="id" v-if="isRequired" required class="border border-gray-300 dark:border-gray-700 px-4 py-3 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" >
            <slot> </slot>
        </select>
        <select v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)" :id="id" v-else required class="border border-gray-300 dark:border-gray-700 px-4 py-3 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" >
            <slot> </slot>
        </select>
    </div>
</template>

<script>
export default {
    props: ['lable', 'isRequired', 'id', 'value']
}
</script>