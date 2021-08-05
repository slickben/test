<template>
    <svg v-if="type === 'check-mark'" :class="classes" class="stroke-current fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.38331 0 0 5.38331 0 12C0 18.6167 5.38331 24 12 24C18.6167 24 24 18.6167 24 12C24 5.38331 18.6167 0 12 0ZM12 23C5.93456 23 0.999984 18.0654 0.999984 12C0.999984 5.93456 5.93456 0.999984 12 0.999984C18.0654 0.999984 23 5.93456 23 12C23 18.0654 18.0654 23 12 23Z" fill=""/>
        <path d="M18.145 7.14645L9.49853 15.793L4.85205 11.1465C4.65672 10.9512 4.34031 10.9512 4.14503 11.1465C3.9497 11.3418 3.9497 11.6582 4.14503 11.8535L9.14505 16.8535C9.24269 16.9512 9.37066 17 9.49858 17C9.6265 17 9.75442 16.9512 9.85211 16.8535L18.8521 7.85352C19.0474 7.65819 19.0474 7.34178 18.8521 7.1465C18.6567 6.95117 18.3403 6.95117 18.145 7.14645Z" fill=""/>
    </svg>

    <svg v-else-if="type === 'status'" width="8" height="8" viewBox="0 0 8 8" class="stroke-current fill-current" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill=""/>
    </svg>

</template>

<script>
export default {
    props: {
        type: String,
        classes: String
    }
}
</script>