<template>
    <div class="w-full">
        <div :class="classes" class="overflow-hidden">
            <div class="py-4 px-4 bg-white text-sm text-tertiary-600">
                <slot name="head"></slot>
            </div>
            <table class="min-w-full bg-primary-100">
                <thead class="text-sm text-tertiary-800">
                    <tr>
                        <th v-for="val in head_data" class="text-left py-4 px-5 text-sm font-normal">{{ val }}</th>
                    </tr>
                </thead>
                <tbody class="bg-white text-sm text-tertiary-500 font-normal stripe">
                    <slot></slot>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        head_data: Array,
        classes: String
    }
}
</script>