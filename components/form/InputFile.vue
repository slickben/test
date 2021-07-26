<template>
    <div class="flex flex-col">
        <label v-show="isWithLabel" :for="id" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">
            {{ lable }} <span v-show="isRequired" class="text-red-500">*</span></label>
        <div class="flex items-center w-full">
            <div  class="w-full focus:outline-none py-3 px-6 border border-r-0 rounded-tl rounded-bl text-xs text-tertiary-300 font-normal placeholder-tertiary-300">
                {{ place_holder }}
            </div>
            <div class="relative w-full text-xs focus:outline-none px-6 bg-primary-400 py-3 text-white border border-primary-400 rounded-tr rounded-br">
                {{ BtnTitle }}
                <input v-bind:value="value" :type="type"  :id="id"
                    v-on:input="$emit('input', $event.target.value)" class="opacity-0 absolute inset-0" type="file" name="" id="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['type', 'id', 'place_holder', 'BtnTitle', 'onClick', 'isWithLabel', 'lable', 'isRequired', 'value']
}
</script>