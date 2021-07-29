<template>
    <div :class="color" class="xl:h-48 h-40 bg-white p-5 rounded-xl font-normal">
        <h4 class="xl:text-sm  text-xs">{{ heading }}</h4>
        <div class="flex items-center h-full justify-center">
            <div class="xl:text-4xl text-2xl text-center">
                <span class="font-medium ">{{ total_count }}</span>
                <p class="xl:text-base text-xs">{{ title }}</p>
                <span class="pt-5 xl:text-xs text-thin text-tertiary-300">This Week :  {{ week_count }}</span>
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