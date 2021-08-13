<template>
    <!--  -->
    <div :class="{ 'w-64': toggleNav }" class="sidebar-shadow absolute sm:relative bg-white shadow md:h-full pb-12">
        <div class="flex flex-col">
            <div class="h-24 w-full flex items-center pb-3 px-5 flex-none">
                <Logo v-show="toggleNav" size="big" />
                <Logo v-show="!toggleNav" size="small" />
            </div>
            <div class="flex-grow">
                <h3 v-show="toggleNav" class="text-xs text-primary-800 uppercase font-extrabold pl-5 pb-1">Menu</h3>
                <div class="">
                    <slot></slot>
                </div>
            </div>
            <div class="flex-none">

            </div>
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