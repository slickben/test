<template>
    <div class="flex flex-no-wrap bg-gray-200 h-screen">
        <!-- Sidebar Start -->
        <Sidebar />
        <!-- Sidebar Ends -->
        <div class="w-full">
            <!-- Navigation starts -->
            <Navigation />
            <!-- Navigation ends -->
            <div class="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
                <!-- Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border -->
                <nuxt-child />
            </div>
        </div>
    </div>
</template>
<script>

import Sidebar from "~/components/SideBar.vue"
import Navigation from "~/components/Navigation.vue"

export default {
    name: "OwnerManager",
    components: {
        Sidebar,
        Navigation
    },
};
</script>
