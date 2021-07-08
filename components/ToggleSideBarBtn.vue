<template>
    <button @click="toggleNav" class="focus:outline-none">
        <img src="~/assets/icons/menu.svg" alt="" srcset="">
    </button>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
    methods: {
        ...mapMutations({
        toggleNav: 'toggleNav',
        }),
    }
}
</script>