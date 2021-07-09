<template>
    <nuxt-link class="" to="/">
        <img v-if="size === 'big'" src="~/assets/images/logo.svg" alt="" srcset="" />
        <img v-if="size === 'small'" src="~/assets/images/logo_small.svg" alt="" srcset="" />
    </nuxt-link>
</template>

<script>
export default {
    props: {
        size: String
    }
}
</script>