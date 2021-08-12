<template>
    <div class="flex items-center justify-between">
        <div>
            <input class="h-10 w-96 focus:outline-none rounded-md border text-sm px-4" type="search" placeholder="search...." name="" id="">
        </div>
        <div class="flex items-center">
            <slot></slot>
        </div>
    </div>
</template>