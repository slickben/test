<template>
    <!--new owner form modal -->
    <div class="absolute bg-black inset-0 bg-opacity-70 px-24 2xl:px-72 pt-12 ">
        <div class="container mx-auto flex flex-col bg-white 2xl:pt-12 py-6 rounded-lg h-90-vh overflow-y-auto my-auto w-full">
            <div class="pb-6 flex-none flex items-start justify-between w-full px-36 ">
                <div>
                    <h1 class="text-2xl font-semibold text-primary-900">Link Plate Number</h1>
                    
                </div>
                <button @click="onclick" class="focus:outline-none">
                    <img src="~/assets/icons/cancle.svg" alt="" srcset="">
                </button>
            </div>
            <div class="flex-grow px-36">
                <form class="h-full flex flex-col shadow">
                    
                    <!-- form fieldset 1 -->
                    <fieldset  class="flex-grow px-16">
                        <div class="flex justify-center pt-10">
                            <div class="max-w-162 w-full px-20">
                                <div class="py-8 pt-40 ">
                                    <p class="pb-1 text-sm text-tertiary-400">Plate Number</p>
                                    <InputWithButtonRight :onClick="verifyPlateNumber" id="plate" BtnTitle="Verify" v-model="plate_number.number" place_holder="Enter Plate Number" type="text" />
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <!-- navigatiom Button -->
                    <div class="flex justify-end items-center py-8 px-10 border-t">
                        
                        <Button class="rounded-lg" :onClick="Submit" type="solid" title="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import InputWithButtonRight from "~/components/form/InputWithButtonRight.vue"
import InputFile from "~/components/form/InputFile.vue"
import InputSelect from "~/components/form/InputSelect.vue"
import Input from "~/components/form/Input.vue"
export default {
    components: {
        InputWithButtonRight,
        InputFile,
        InputSelect,
        Input,
    },
    data() {
        return {
            plate_number: {
                number: ''
            }
        }
    },
    props:['onclick'],
    methods: {
        Submit() {

        },
        async  verifyPlateNumber() {
            try {

                this.$toast.show('Wait verifing plate number...', {
                    theme: "outline", 
                    position: "top-right", 
                    duration : 5000
                })

                const response = await this.$axios.$post('plate-number/validate', {
                    data: this.plate_number,
                })
                console.log(response)
            } catch (error) {
                console.log(error.response)
                if(error.response) {
                    this.$toast.error('plate number not verify', {
                        theme: "outline", 
                        position: "top-right", 
                        duration : 60000
                    })
                }
            }
        }
    }
}
</script>