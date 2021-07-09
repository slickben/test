<template>
    <div :class="[color(status), classes]" class="flex items-center justify-center font-normal rounded-md ">
        {{ status }}
    </div>
</template>

<script>
export default {
    props: {
        status: String,
        classes: String
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