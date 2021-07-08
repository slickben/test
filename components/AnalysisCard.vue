<template>
    <div :class="color" class="h-48 bg-white p-5 rounded-xl font-normal">
        <h4 class="text-sm ">{{ heading }}</h4>
        <div class="flex items-center h-full justify-center">
            <div class="text-4xl text-center">
                <span class="font-medium ">{{ total_count }}</span>
                <p class="text-base">{{ title }}</p>
                <span class="pt-5 text-xs text-tertiary-300">This Week :  {{ week_count }}</span>
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