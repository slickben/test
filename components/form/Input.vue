<template>
    <div class="flex flex-col w-full">
        <label :for="id" class="pb-2 text-xs font-normal text-left text-tertiary-600 dark:text-gray-100">
            {{ lable }} <span v-show="isRequired" class="text-red-500">*</span></label>
        <input :disabled="isDisable" v-if="isRequired" v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)" :type="type" :id="id" :class="[isDisable ? 'opacity-50' : '']"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-600 dark:text-gray-400" :placeholder="place_holder" />

        <input :class="[isDisable ? 'opacity-50' : '']" :disabled="isDisable" v-else v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)" :type="type" :id="id" class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-600 dark:text-gray-400" :placeholder="place_holder" />
    </div>
</template>

<script>
export default {
    props: ['lable', 'isRequired', 'type', 'place_holder', 'id', 'value', 'isDisable']
}
</script>