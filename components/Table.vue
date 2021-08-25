<template>
    <div class="w-full">
        <div :class="classes" class="">
            <div class="p-5 bg-white text-sm text-tertiary-600 rounded-t-lg">
                <slot name="head"></slot>
            </div>
            <div class="relative w-full pt-14 bg-primary-100 text-tertiary-800">
                <div class="overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary-200 scrollbar-track-white">
                    <table class="min-w-full bg-primary-100 overflow-auto">
                        <thead class="xl:text-sm text-xs text-tertiary-800">
                            <tr class=" overflow-x-auto">
                                <th v-for="val in head_data" class="text-left px-6 text-xs xl:text-sm font-normal h-0 py-0 border-0 pb-2">   
                                    <div class="py-6 text-tertiary-800 font-semibold"> {{ val }}  </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white text-sm text-tertiary-500 font-normal stripe ">
                            <slot></slot>
                        </tbody>
                    </table>
                </div>
            </div>
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