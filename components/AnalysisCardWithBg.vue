<template>
    <div class="relative bg-primary-300 rounded-xl">
        <img class="mx-auto" src="~/assets/images/wheel.png" alt="" srcset="">
        <div :class="color" class="bg-primary-500 bg-opacity-80 p-5 rounded-xl font-normal absolute inset-0">
            <div class="flex items-center h-full justify-center">
                <div class="xl:text-4xl text-2xl text-center">
                    <span class="font-medium ">{{ total_count }}</span>
                    <p class="xl:text-base text-xs pt-3">{{ title }}</p>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        heading: String,
        total_count: String,
        week_count: String,
        color: String
    }
}
</script>