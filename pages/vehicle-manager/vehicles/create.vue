<template>
    
</template>

<script>
import Button from '~/components/Button.vue'
import CategoryIcon from '~/components/CategoryIcon.vue'
import Icons from '~/components/Icons.vue'
export default {
    components: {
        Button,
        CategoryIcon,
        Icons
    },
    data () {
        return {
            step: 0,
            personalInfoModal: false,
            existingOwnModal: false,
            vehicleInfoModal: false,
            completedClass: 'border-l-0 border-primary-400 bg-primary-400 text-white',
            activeClass: 'border-tertiary-600'
        }
    },
    methods: {
        next() {
            this.step+= 1
        },
        previus() {
            if(this.step === 0 ) {
                return this.step
            }
            this.step-= 1
        },
        submitPersonaInfo() {
            this.personalInfoModal = !this.personalInfoModal
            this.step = 0
        },
        toggleExistigOwnerModal () {
            this.existingOwnModal = !this.existingOwnModal
        },
        togglevehicleModal () {
            this.vehicleInfoModal = !this.vehicleInfoModal
        }
    }
    
}
</script>