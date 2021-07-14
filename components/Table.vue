<template>
    <div class="w-full">
        <div :class="classes" class="overflow-hidden">
            <div class="py-4 px-4 bg-white text-sm text-tertiary-600">
                <slot name="head"></slot>
            </div>
            <div class="relative w-full pt-14 bg-primary-100 text-tertiary-800">
                <div class="max-h-75 overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary-200 scrollbar-track-white">
                    <table class="min-w-full bg-primary-100">
                        <thead class="text-sm text-tertiary-800">
                            <tr>
                                <th v-for="val in head_data" class="text-left px-5 text-sm font-normal h-0 py-0 border-0">   
                                    <div class="py-4 text-tertiary-500"> {{ val }}  </div>
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