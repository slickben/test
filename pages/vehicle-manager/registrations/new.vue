<template>
    <div class="fixed inset-0 bg-white z-40 px-24 2xl:px-48 pt-12">
        <div class="container mx-auto px-16 2xl:px-24 flex flex-col py-10 bg-white rounded-lg h-90-vh overflow-y-auto my-auto scrollbar-thin
            scrollbar-thumb-tertiary-200
            scrollbar-track-tertiary-100">
            <div class="pb-6 flex-none flex items-start justify-between w-full ">
                <h1 class="text-2xl font-semibold text-primary-900">New Registration</h1>
                <button @click.prevent="$router.back()" class="focus:outline-none">
                    <img src="~/assets/icons/cancle.svg" alt="" srcset="">
                </button>
            </div>
            <div class=" bg-tertiary-100 flex-grow pb-8 pt-2 px-10 rounded-md">
                <div class="grid xl:grid-cols-2">
                    <div class="h-full">
                        <div class="flex items-center relative">
                            <div class="h-full pl-1">
                                <img class="" src="~/assets/icons/check-mark.svg" alt="" srcset="">
                                <div class="absolute -bottom-20 2xl:-bottom-24 left-4 h-full 2xl:py-3 pt-6">
                                    <div class="h-full border-r border-tertiary-600">

                                    </div>
                                </div>
                            </div>
                            <div class="my-4 2xl:my-4">
                                <h4 class="pb-2 text-center font-normal text-sm text-tertiary-600">Owner Details</h4>
                                <div class="w-96 h-32 rounded-3xl flex items-center justify-center border border-tertiary-600 ml-5">
                                    <Button class="rounded-lg" :onClick="toggleOwnerModal"  type="solid" title="New owner"/>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center relative">
                            <div class="h-full pl-1">
                                <img class="" src="~/assets/icons/check-mark.svg" alt="" srcset="">
                                <div class="absolute -bottom-20 2xl:-bottom-24 left-4 h-full 2xl:py-3 pt-6">
                                    <div class="h-full border-r border-tertiary-600">

                                    </div>
                                </div>
                            </div>
                            <div class="my-4 2xl:my-4">
                                <h4 class="pb-2 text-center font-normal text-sm text-tertiary-600">Vehicle Details</h4>
                                <div class="w-96 h-32 rounded-3xl flex items-center justify-center border border-tertiary-600 ml-5 ">
                                    <Button class="rounded-lg" :onClick="toggleVehicleModal" type="solid" title="New Vehicle"/>
                                    <!-- <Button type="secondary" title="Existing owner"/> -->
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="pl-1">
                                <img src="~/assets/icons/check-mark.svg" alt="" srcset="">
                            </div>
                            <div class="my-4 2xl:my-4">
                                <h4 class="pb-2 text-center font-normal text-sm text-tertiary-600">Plate Number</h4>
                                <div class="w-96 h-32 rounded-3xl flex items-center justify-center border border-tertiary-600 ml-5">
                                    <Button class="rounded-lg" :onClick="linkPlateModal" type="solid" title="Link Plate Number"/>
                                    <!-- <Button type="secondary" title="Existing owner"/> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="2xl:ml-20 h-full pt-6">
                        <div class="w-full bg-white rounded-xl px-8 h-full flex flex-col">
                            <h3 class="p-6 border-b text-center text-tertiary-500 font-medium flex-none text-sm">
                                Payment Details
                            </h3>
                            <div class="flex-grow py-6 border-b text-sm text-tertiary-500 font-normal">
                                <div class="flex justify-between items-center py-3">
                                    <p>Vehicle License</p>
                                    <p>#17500</p>
                                </div>
                                <div class="flex justify-between items-center py-3">
                                    <p>Road Worthiness</p>
                                    <p>#17500</p>
                                </div>
                                <div class="flex justify-between items-center py-3">
                                    <p>Radio License</p>
                                    <p>#17500</p>
                                </div>
                                <div class="flex justify-between items-center py-3">
                                    <p>Insurance</p>
                                    <p>#17500</p>
                                </div>
                                <div class="flex justify-between items-center py-3">
                                    <p>Registration Fee</p>
                                    <p>#17500</p>
                                </div>
                            </div>
                            <div class="py-6 text-sm text-tertiary-500 font-normal">
                                <div class="flex items-center justify-between">
                                    <p>Total</p>
                                    <p>#17500</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="flex justify-end items-center pt-8">
                    <Button class="mr-12 rounded-lg" type="solid" title="Processed To Payment"/>
                    <Button :onClick="goBack" class="rounded-lg" type=""  title="Cancel"/>
                </div>
            </div>
        </div>
        <VehicleInfoModal :onclick="toggleVehicleModal" v-show="vehicleInfoModal" />
        <OwnerInfoModal :onclick="toggleOwnerModal" v-show="ownerInfoModal"/>
        <LinkPlateNumberModal :onclick="linkPlateModal" v-show="linkPlateNumberModal" />
    </div>
</template>

<script>
import VehicleInfoModal from '~/components/Vehicle_Registration/VehicleInfoModal.vue'
import OwnerInfoModal from '~/components/Vehicle_Registration/OwnerInfoModal.vue'
import LinkPlateNumberModal from '~/components/Vehicle_Registration/LinkPlateNumberModal.vue'
import { mapMutations, mapState } from 'vuex'
export default {
    components: {
        VehicleInfoModal,
        OwnerInfoModal,
        LinkPlateNumberModal
    },
    data() {
        return {
            ownerInfoModal: false,
            vehicleInfoModal: false,
            linkPlateNumberModal: false,
        }
    },
    computed: {
        ...mapState({
            vehicleData: state => state.vehicle_registration.vehicleData,
            ownerData: state => state.vehicle_registration.ownerData
        })
    },
    methods: {
        // ...mapMutations({
        //     TOGGLE_VEHICLE_REGISTRATION: 'vehicle_registration/TOGGLE_VEHICLE_REGISTRATION'
        // }),
        linkPlateModal() {
            this.linkPlateNumberModal = !this.linkPlateNumberModal
        },
        toggleOwnerModal() {
            this.ownerInfoModal = !this.ownerInfoModal
            this.step = 1
        },
        toggleVehicleModal () {
            this.vehicleInfoModal = !this.vehicleInfoModal
            this.step = 1
        },
        goBack() {
            this.$route.back()
        }
    },
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {

        await store.dispatch('settings/owner_manager/getLgas')

        await store.dispatch('settings/owner_manager/getMaritalStatuses')

        await store.dispatch('settings/owner_manager/getMeansOfIdentities')

        await store.dispatch('settings/owner_manager/getPrefixs')

        await store.dispatch('settings/owner_manager/getStates')

        await store.dispatch('settings/vehicle_manager/getCategories')

        await store.dispatch('settings/owner_manager/getAgencyCategories')

        await store.dispatch('settings/owner_manager/getStates')

        await store.dispatch('settings/vehicle_manager/getCategories')

        await store.dispatch('settings/vehicle_manager/getCommercialSeatCodes')

        await store.dispatch('settings/vehicle_manager/getEngines')

        await store.dispatch('settings/vehicle_manager/getFuels')

        await store.dispatch('settings/vehicle_manager/getHackneyCodes')

        await store.dispatch('settings/vehicle_manager/getMakes')

        await store.dispatch('settings/vehicle_manager/getModels')

        await store.dispatch('settings/vehicle_manager/getVehicleType')

        await store.dispatch('settings/vehicle_manager/getYears')
    },
}
</script>