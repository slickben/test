<template>
    <div class="">
	<!--actual component start-->
        <div>
            <ul class="flex justify-start items-center border-b px-10">
                <slot name="head"></slot>
            </ul>

            <div class="bg-white text-center mx-auto">
                <slot></slot>
            </div>
        </div>
        <!--actual component end-->
    </div>
</template>

<script>
import Button from "~/components/Button.vue"
export default {
    components: {
        Button
    },
}
</script>
