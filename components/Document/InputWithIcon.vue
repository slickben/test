<template>
    <div class="text-left">
        <label :for="id" class="pb-3 text-sm text-tertiary-500">{{ label }}</label>
        <div class="border border-tertiary-300 shadow-sm rounded flex">
            <div class="px-4 py-3 dark:text-gray-100 flex items-center border-r border-tertiary-300">
                <slot></slot>
            </div>
            <input :type="type" :id="id" :name="id" class="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-500 dark:text-gray-400" placeholder="500" />
        </div>
    </div>
</template>

<script>
export default {
    props: ['label', 'id', 'type', ]
}
</script>