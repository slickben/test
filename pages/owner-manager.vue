<template>
    <div class="flex flex-no-wrap bg-tertiary-100 h-screen">
        <!-- Sidebar Start -->
        <Sidebar />
        <!-- Sidebar Ends -->
        <div class="w-full">
            <!-- Navigation starts -->
            <Navigation  css="bg-white pl-8 pr-24 shadow-2xl z-10 border-b">
                <template v-slot:right>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H8V8H4V4Z" fill="#707070"/>
                        <path d="M4 10H8V14H4V10Z" fill="#707070"/>
                        <path d="M8 16H4V20H8V16Z" fill="#707070"/>
                        <path d="M10 4H14V8H10V4Z" fill="#707070"/>
                        <path d="M14 10H10V14H14V10Z" fill="#707070"/>
                        <path d="M10 16H14V20H10V16Z" fill="#707070"/>
                        <path d="M20 4H16V8H20V4Z" fill="#707070"/>
                        <path d="M16 10H20V14H16V10Z" fill="#707070"/>
                        <path d="M20 16H16V20H20V16Z" fill="#707070"/>
                    </svg>
                </template>
                <template v-slot:lift>
                    <ToggleSideBarBtn />
                </template>
            </Navigation>
            <!-- Navigation ends -->
            <div>
                <BreadCrumb />
                <div class="w-lg-screen mx-auto px-20 py-10 2xl:px-0">
                    <!-- Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border -->
                    
                    <nuxt-child />
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import Sidebar from "~/components/SideBar.vue"
import Navigation from "~/components/Navigation.vue"
import ToggleSideBarBtn from "~/components/ToggleSideBarBtn.vue"
import BreadCrumb from "~/components/BreadCrumb.vue"

export default {
    name: "OwnerManager",
    auth: false,
    components: {
        Sidebar,
        Navigation,
        ToggleSideBarBtn,
        BreadCrumb
    },
};
</script>
