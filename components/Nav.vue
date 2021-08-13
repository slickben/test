<template>
    <li class="text-tertiary-500 mb-2">
        <nuxt-link :to="link" class="hover:bg-primary-100 pl-5 inline-flex items-center py-4 pb-3  text-sm transition duration-500 ease-in-out transform w-full" href="#">
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