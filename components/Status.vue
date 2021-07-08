<template>
    <div :class="color(status)" class="w-24 h-8 flex items-center justify-center text-xs font-normal rounded-md ">
        {{ status }}
    </div>
</template>

<script>
export default {
    props: {
        status: String
    },
    computed: {
        
    },
    methods: {
        color (status) {
            if(status === 'approved') {
                return 'text-action-success bg-action-success-light'
            }else if (status === 'pending') {
                return 'text-action-warning bg-action-warning-light'
            }else if (status === 'denied') {
                return 'text-action-danger bg-action-danger-light'
            }else {
                return ''
            }
        }
    }
}
</script>