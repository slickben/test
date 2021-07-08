<template>
    <!--  -->
    <div :class="{ 'w-64': toggleNav }" class="sidebar-shadow absolute sm:relative bg-white shadow md:h-full pb-12">
        <div class="">
            <div class="h-24 w-full flex items-center pb-3 px-5">
                <Logo v-show="toggleNav" size="big" />
                <Logo v-show="!toggleNav" size="small" />
            </div>
            <h3 v-show="toggleNav" class="text-xs text-primary-800 uppercase font-bold mt-5 pl-5">Menu</h3>
            <ul class="pt-3">
                <Nav :toggleNav="toggleNav" name="Overview" link="/owner-manager">
                    <img src="~assets/icons/dashboard.svg" alt="" srcset="">
                </Nav>
                <Nav :toggleNav="toggleNav" name="Individual" link="/owner-manager/individual">
                    <img src="~assets/icons/user.svg" alt="" srcset="">
                </Nav>
                <Nav :toggleNav="toggleNav" name="Business" link="/owner-manager/business">
                    <img src="~assets/icons/officebuilding.svg" alt="" srcset="">
                </Nav>
                <Nav :toggleNav="toggleNav" name="Government" link="/owner-manager/government">
                    <img src="~assets/icons/bank.svg" alt="" srcset="">
                </Nav>
            </ul>
        </div>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue';
import Nav from '~/components/Nav.vue';
import { mapState } from 'vuex'
export default {
    components: {
        Logo,
        Nav
    },
    computed: mapState({
        toggleNav: state => state.toggleNav
    }),
}
</script>