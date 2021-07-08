<template>
    <li class="pl-5 hover:bg-primary-100 text-tertiary-500 my-2">
        <nuxt-link :to="link" class="inline-flex items-center py-2 pb-3 mt-2 text-sm transition duration-500 ease-in-out transform w-full" href="#">
            <slot></slot>
            <span v-show="toggleNav" class="ml-4">{{ name }}</span>
        </nuxt-link>
    </li>
</template>

<script>
export default {
    props: {
        name: {
            String,
            required: true
        },
        link: {
            String,
            required: true
        },
        toggleNav: {
            String,
            required: true
        },
    }
}
</script>