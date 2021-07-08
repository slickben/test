<template>
    <nuxt-link class="" to="/">
        <img v-if="size === 'big'" src="~/assets/images/Logo.svg" alt="" srcset="" />
        <img v-if="size === 'small'" src="~/assets/images/LogoSmall.svg" alt="" srcset="" />
    </nuxt-link>
</template>

<script>
export default {
    props: {
        size: String
    }
}
</script>