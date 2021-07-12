<template>
    <button @click="onClick" v-if="type === 'solid'" class="w-28 h-10 text-white text-xs flex items-center justify-center rounded-xl bg-primary-400 focus:outline-none border-0 mr-4 hover:bg-primary-600">{{ title }}</button>

    <button @click="onClick" v-else class="w-28 h-10 text-primary-400 text-xs flex items-center justify-center rounded-xl  focus:outline-none border-0 hover:bg-primary-100"> {{ title }} </button>
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