<template>
    <button @click="onClick" v-if="type === 'solid'" class="w-28 h-10 text-white text-xs flex items-center justify-center rounded-md bg-primary-400 focus:outline-none border border-primary-400 mr-4 hover:bg-primary-600 font-medium">{{ title }}</button>

    <button @click="onClick" v-else class="w-28 h-10 text-primary-500 text-xs flex items-center justify-center rounded-md hover:text-primary-700 focus:outline-none hover:bg-primary-200 border border-primary-400 font-medium"> {{ title }} </button>
</template>

<script>
export default {
    props: {
        type: String,
        title: String,
        onClick: {
            type: Function,
        }
    }
}
</script>