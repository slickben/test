<template>
    <div class="flex items-center justify-between">
        <div>
            <slot name="filter"> </slot>
        </div>
        <div class="flex items-center">
            <slot></slot>
        </div>
    </div>
</template>