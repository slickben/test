<template>
    <button @click="onClick" v-if="type === 'solid'" class="px-6 min-w-28 min-h-10 text-white text-xs flex items-center justify-center rounded-xl bg-primary-400 focus:outline-none border-0 mr-4 hover:bg-primary-600">{{ title }}</button>

    <button @click="onClick" v-else-if="type === 'secondary'" class="px-6 min-w-28 min-h-10 text-primary-500 text-xs flex items-center justify-center rounded-xl  focus:outline-none border border-primary-300 hover:bg-primary-200 hover:text-primary-600"> {{ title }} </button>

    <button @click="onClick" v-else class="px-6 min-w-28 min-h-10 text-primary-500 text-xs flex items-center justify-center rounded-xl  focus:outline-none border-0 hover:bg-primary-100"> {{ title }} </button>

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