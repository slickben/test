<template>
    <div class="pb-8 h-full">
        <BreadCrumb title="Roles">
            <Button type="solid" title="Add"  :onClick="toggleSlide" />
        </BreadCrumb>
        <div class="max-w-lg-screen mx-auto px-10 xl:px-32 py-10 2xl:px-0  h-full w-full">
            <div class="flex items-center p-6 bg-white mb-6 rounded-lg">
                <div class="flex-none">
                    <div class="flex flex-col w-80">
                        <label for="engine_number" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Name <span class="text-red-500">*</span></label>
                        <input type="text" id="engine_number" required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Super Admin" />
                    </div>
                </div>
                <div class="flex-grow pr-20 pl-6">
                    <div class="flex flex-col w-full">
                        <label for="engine_number" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Description<span class="text-red-500">*</span></label>
                        <input type="text" id="engine_number" required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Description" />
                    </div>
                </div>
            </div>
            <div class="grid gap-y-8 bg-white h-full">
                <Tabs>
                    <template slot="head">
                        <li 
                            v-for="(tab, index) in tabs" 
                            :key="index" 
                            class="text-xs cursor-pointer py-2 mr-10 border-b-4 "
                            :class="activeTab===index ? 'text-primary-400 border-primary-400' : 'text-tertiary-500 border-transparent'" 
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
                                    <button class="py-3 px-6 focus:outline-none  border-transparent text-primary-500 bg-primary-100 w-full text-left block font-normal text-xs xl:text-base block" to="">Owner Manager</button>
                                </li>
                                <li 
                                class="w-full  hover:border-transparent "
                                >
                                    <button class="py-3 px-6 focus:outline-none  border-transparent  w-full text-left block font-normal text-xs xl:text-base block" to="">Vehicle Manager</button>
                                </li>
                                <li
                                class="w-full  hover:border-transparent "
                                >
                                    <button class="py-3 px-6 focus:outline-none  border-transparent  w-full text-left block font-normal text-xs xl:text-base block" to="">Houseing Operations</button>
                                </li>
                                <li
                                class="w-full  hover:border-transparent "
                                >
                                    <button class="py-3 px-6 focus:outline-none  border-transparent  w-full text-left block font-normal text-xs xl:text-base block" to="">Plate Manager</button>
                                </li>
                                <li
                                class="w-full  hover:border-transparent "
                                >
                                    <button class="py-3 px-6 focus:outline-none  border-transparent  w-full text-left block font-normal text-xs xl:text-base block" to="">Payment </button>
                                </li>
                                <li
                                class="w-full  hover:border-transparent "
                                >
                                    <button class="py-3 px-6 focus:outline-none  border-transparent  w-full text-left block font-normal text-xs xl:text-base block" to="">Business Intelligence </button>
                                </li>
                                <li
                                class="w-full  hover:border-transparent "
                                >
                                    <button class="py-3 px-6 focus:outline-none  border-transparent  w-full text-left block font-normal text-xs xl:text-base block" to="">Tax Net </button>
                                </li>
                                <li
                                class="w-full  hover:border-transparent "
                                >
                                    <button class="py-3 px-6 focus:outline-none  border-transparent  w-full text-left block font-normal text-xs xl:text-base block" to="">Document Manager</button>
                                </li>
                                <li
                                class="w-full  hover:border-transparent "
                                >
                                    <button class="py-3 px-6 focus:outline-none  border-transparent  w-full text-left block font-normal text-xs xl:text-base block" to="">User Manager</button>
                                </li>
                                <li
                                class="w-full  hover:border-transparent "
                                >
                                    <button class="py-3 px-6 focus:outline-none  border-transparent  w-full text-left block font-normal text-xs xl:text-base block" to="">Settings</button>
                                </li>
                            </ul>
                        </nav>
                        <div class="col-span-3 pl-8 pt-4">
                            <!-- PARENT -->
                            <div>
                                <div class="flex items-end pb-4">
                                    <div class="pb-1 pr-1">
                                        <img src="~/assets/icons/chevron-down.svg" alt="" srcset="">
                                    </div>
                                    <label class="flex items-center">
                                        <input type="checkbox" class="form-checkbox ">
                                        <span class="ml-2 text-xs xl:text-sm text-tertiary-600">View Owner</span>
                                    </label>
                                </div>
                                <!-- in parent -->
                                <div class="">
                                    <!-- child -->
                                    <div class="flex items-end pb-4">
                                        <div class="w-8 border-b-2"></div>
                                        <div class="pb-1 pr-1">
                                            <img src="~/assets/icons/chevron-down.svg" alt="" srcset="">
                                        </div>
                                        <div class="flex">
                                            <label class="flex items-center">
                                                <input type="checkbox" class="form-checkbox ">
                                                <span class="ml-2 text-xs xl:text-sm text-tertiary-600">Update </span>
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
                                                    <span class="ml-2 text-xs xl:text-sm text-tertiary-600">Edit Information</span>
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
                                                    <span class="ml-2 text-xs xl:text-sm text-tertiary-600">Upload Document</span>
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
                                                <span class="ml-2 text-xs xl:text-sm text-tertiary-600">Delete</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="py-5 px-6 " v-show="activeTab === 1">
                        <div class="flex flex-col w-100">
                            <label for="vehicle_type" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100 text-left">Add User<span class="text-red-500">*</span></label>
                            <select id="vehicle_type"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="@example">
                                <option value="">Select Vehicle Type </option>
                            </select>
                        </div>
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