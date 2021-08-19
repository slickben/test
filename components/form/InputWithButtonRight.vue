<template>
    <div class="flex flex-col">
        <label v-show="isWithLabel" :for="id" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">
            {{ lable }} <span v-show="isRequired" class="text-red-500">*</span></label>
        <div class="flex items-center w-full">
            <input v-bind:value="value"
            v-on:input="$emit('input', $event.target.value)" class="w-full focus:outline-none py-3 px-6 border border-r-0 rounded-tl rounded-bl text-xs text-tertiary-300 font-normal placeholder-tertiary-300" :type="type"  :id="id" :placeholder="place_holder">
            <button @click.prevent="onClick" class="text-xs focus:outline-none px-12 bg-primary-400 py-3 text-white border border-primary-400 rounded-tr rounded-br"> {{ BtnTitle }} </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['type', 'id', 'place_holder', 'BtnTitle', 'onClick', 'isWithLabel', 'lable', 'isRequired', 'value']
}
</script>