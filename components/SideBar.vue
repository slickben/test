<template>
    <!--  -->
    <div :class="{ 'w-64': toggleNav }" class="sidebar-shadow absolute sm:relative bg-white shadow md:h-full pb-12">
        <div class="">
            <div class="h-24 w-full flex items-center pb-3 px-5">
                <Logo v-show="toggleNav" size="big" />
                <Logo v-show="!toggleNav" size="small" />
            </div>
            <h3 v-show="toggleNav" class="text-xs text-primary-800 uppercase font-bold mt-5 pl-5">Menu</h3>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue';
import { mapState } from 'vuex'
export default {
    components: {
        Logo,
    },
    computed: mapState({
        toggleNav: state => state.toggleNav
    }),
}
</script>