<template>
    <div class="pb-8 h-full">
        <BreadCrumb title="Vehicle Manager">
            <Button title="Update"  :onClick="toggleSlide" />
        </BreadCrumb>
        <div class="max-w-lg-screen mx-auto px-32 py-10 2xl:px-0  h-full w-full">
            <div class="grid gap-y-8 bg-white h-full">
                <Tabs>
                    <template slot="head">
                        <li 
                            v-for="(tab, index) in tabs" 
                            :key="index" 
                            class="text-xs cursor-pointer py-2 mr-10 text-tertiary-500 border-b-4 "
                            :class="activeTab===index ? 'text-purple-600 border-purple-600' : 'border-transparent'" 
                            @click="activeTab = index"
                        >
                            {{ tab }}
                        </li>
                    </template>
                    <div class="py-5 grid grid-cols-4" v-show="activeTab === 0">
                        <nav class="">
                            <ul class=" text-tertiary-500">
                                <li
                                class="w-full  hover:border-transparent"
                                >
                                <nuxt-link class="py-3 px-6  border-transparent text-primary-500 bg-primary-100 w-full text-left block" to="/settings/vehicle-manager/category">Registration Category</nuxt-link>
                                </li>
                                <li
                                class="w-full  hover:border-transparent "
                                >
                                <nuxt-link class="py-3 px-6  border-transparent hover:text-primary-500 hover:bg-primary-100 w-full text-left block" to="/settings/vehicle-manager/type">Vehicle Type</nuxt-link>
                                </li>
                                <li
                                class="w-full  hover:border-transparent "
                                >
                                <nuxt-link class="py-3 px-6  border-transparent hover:text-primary-500 hover:bg-primary-100 w-full text-left block" to="/settings/vehicle-manager/make">Vehicle Makes</nuxt-link>
                                </li>
                                <li
                                class="w-full  hover:border-transparent "
                                >
                                <nuxt-link class="py-3 px-6  border-transparent hover:text-primary-500 hover:bg-primary-100 w-full text-left block" to="/settings/vehicle-manager/model">Models</nuxt-link>
                                </li>
                                <li
                                class="w-full  hover:border-transparent "
                                >
                                <nuxt-link class="py-3 px-6  border-transparent hover:text-primary-500 hover:bg-primary-100 w-full text-left block" to="/settings/vehicle-manager/year">Year of Manufacture</nuxt-link>
                                </li>
                                <li
                                class="w-full  hover:border-transparent "
                                >
                                <nuxt-link class="py-3 px-6  border-transparent hover:text-primary-500 hover:bg-primary-100 w-full text-left block" to="/settings/vehicle-manager/engine">Engine Capacity</nuxt-link>
                                </li>
                                <li
                                class="w-full  hover:border-transparent "
                                >
                                <nuxt-link class="py-3 px-6  border-transparent hover:text-primary-500 hover:bg-primary-100 w-full text-left block" to="/settings/vehicle-manager/fuel">Fuel Type</nuxt-link>
                                </li>
                                <li
                                class="w-full  hover:border-transparent "
                                >
                                <nuxt-link class="py-3 px-6  border-transparent hover:text-primary-500 hover:bg-primary-100 w-full text-left block" to="/settings/vehicle-manager/hackney-codes">Hackney Codes</nuxt-link>
                                </li>
                                <li
                                class="w-full  hover:border-transparent "
                                >
                                <nuxt-link class="py-3 px-6  border-transparent hover:text-primary-500 hover:bg-primary-100 w-full text-left block" to="/settings/vehicle-manager/commercial-seat-code">Commercial Seat Code</nuxt-link>
                                </li>
                                <li
                                class="w-full  hover:border-transparent "
                                >
                                <nuxt-link class="py-3 px-6  border-transparent hover:text-primary-500 hover:bg-primary-100 w-full text-left block" to="/settings/vehicle-manager/license">Vehicle License</nuxt-link>
                                </li>
                            </ul>
                        </nav>
                        <div class="col-span-3 pl-8 pt-4">
                            <!-- PARENT -->
                            <div>
                                <div class="flex pb-4">
                                    <label class="flex items-center">
                                        <input type="checkbox" class="form-checkbox ">
                                        <span class="ml-2 text-sm text-tertiary-600">View Owner</span>
                                    </label>
                                </div>
                                <!-- in parent -->
                                <div class="">
                                    <!-- child -->
                                    <div class="flex items-end pb-4">
                                        <div class="w-8 border-b-2"></div>
                                        <div class="flex">
                                            <label class="flex items-center">
                                                <input type="checkbox" class="form-checkbox ">
                                                <span class="ml-2 text-sm text-tertiary-600">Update </span>
                                            </label>
                                        </div>
                                    </div>
                                    
                                    <!-- parent -->
                                    <div class="ml-8">
                                        <div class="flex items-end pb-4">
                                            <div class="w-8 border-b-2"></div>
                                            <div class="flex">
                                                <label class="flex items-center">
                                                    <input type="checkbox" class="form-checkbox ">
                                                    <span class="ml-2 text-sm text-tertiary-600">Edit Information</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="ml-8">
                                        <div class="flex items-end pb-4">
                                            <div class="w-8 border-b-2"></div>
                                            <div class="flex">
                                                <label class="flex items-center">
                                                    <input type="checkbox" class="form-checkbox ">
                                                    <span class="ml-2 text-sm text-tertiary-600">Upload Document</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="">
                                    <!-- child -->
                                    <div class="flex items-end pb-4">
                                        <div class="w-8 border-b-2"></div>
                                        <div class="flex">
                                            <label class="flex items-center">
                                                <input type="checkbox" class="form-checkbox ">
                                                <span class="ml-2 text-sm text-tertiary-600">Delete</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="py-5 " v-show="activeTab === 1">
                        g
                    </div>
                </Tabs>
            </div>
        </div>
    </div>
</template>

<script>
import Status from '~/components/Status.vue';
import BioData from '~/components/BioData.vue';AssetsCard
import ActivitiesLog from '~/components/ActivitiesLog.vue';
import AssetsCard from '~/components/AssetsCard.vue';
import Sliding from '~/components/Sliding.vue';
import Tabs from '~/components/Tabs.vue';
import BreadCrumb from '~/components/BreadCrumb.vue';
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Show',
    data () {
        return {
            toggle_slide: false,
            table_head_data: ['Unique Id #', 'Profile Name', 'Category', 'Date Created'],
            activeTab: 0,
            tabs: [
                "Permission",
                "User",
            ],
        }
    },
    components: {
        Status,
        BioData,
        ActivitiesLog,
        AssetsCard,
        Sliding,
        Tabs,
        BreadCrumb,
    },
    computed: {
        ...mapState({
            demo: state => state.demo
        })
    },
    methods: {
        ...mapActions({
            updateOwner: 'vehicle/updateVehicle'
        }),
        toggleSlide () {
            this.toggle_slide = !this.toggle_slide
        },
        getOwnerName (owner) {
            let ownersName
            if(owner.attributes.type === 'Business') {
                ownersName = owner.attributes.businessName
            }else if (owner.attributes.type === 'Government') {
                ownersName = owner.attributes.agencyName
            }else {
                ownersName = `${owner.attributes.firstName} ${owner.attributes.lastName} ${owner.attributes.otherName ? owner.attributes.otherName : ''}`
            }

            return ownersName
        }
    },
    // asyncData({store, params,}) {

    //     let vehicles = store.state.vehicle.vehicles
    //     let vehicle = vehicles.find( vehicle => vehicle.id == params.id)
    //     let update_data = {
    //         id: vehicle.id,
    //         vehicleCategory: vehicle.attributes.category,
    //         plateNumber: vehicle.attributes.plateNumber,
    //         make: vehicle.attributes.make,
    //         model: vehicle.attributes.model,
    //         color: vehicle.attributes.color,
    //         engineCapacity: vehicle.attributes.engineCapacity,
    //         engineNumber: vehicle.attributes.engineNumber,
    //         fuelType: vehicle.attributes.fuelType,
    //         tankCapacity: vehicle.attributes.tankCapacity,
    //         stateOfPlateNumberAllocation: vehicle.attributes.stateOfPlateNumberAllocation,
    //         seatCode: vehicle.attributes.seatCode,
    //         type: vehicle.attributes.type,
    //         chansisNumber: vehicle.attributes.chansisNumber,
    //         mileage: vehicle.attributes.mileage,
    //         year: vehicle.attributes.year,
    //         hackneyCode: vehicle.attributes.hackneyCode
    //     }
    //     return {
    //         vehicle,
    //         update_data
    //     }
    // }
}
</script>

<style>
.checkbox:checked + .check-icon {
    display: flex;
}
</style>