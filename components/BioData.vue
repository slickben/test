<template>
    <div class="grid grid-cols-6 bg-white rounded-lg gap-x-2 max-h-64">
            <div class="col-span-2 p-5 border-r-4">
                <h3 class="text-xs font-normal text-tertiary-500">Bio Data</h3>
                <div class="pt-6 grid grid-cols-2 gap-y-4 capitalize">
                    <slot name="left"></slot>
                </div>
            </div>
            <div class="col-span-4 p-5">
                <div class="pt-3 grid grid-cols-7 gap-y-4 capitalize text-sm text-primary-900 font-normal">
                    <slot></slot>
                </div>
            </div>
        </div>
</template>