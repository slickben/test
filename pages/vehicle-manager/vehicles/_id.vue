<template>
    <div class="pb-8">
        <BreadCrumb title="Vehicle Manager">
            <!-- <Button title="Update"  :onClick="toggleSlide" /> -->
        </BreadCrumb>
        <div class="max-w-lg-screen mx-auto px-10 xl:px-32 py-10 2xl:px-0  h-full w-full">
            <div class="grid gap-y-8">
                <BioData>
                    <template slot="left">
                        <div class="col-span-2">
                            <h5 class="text-xs font-normal text-tertiary-300">Vehicle Id</h5>
                            <p class="text-xl text-tertiary-700 font-medium">{{ vehicle.id ? vehicle.id : '-'}}</p>
                        </div>
                        <div class="col-span-2">
                            <h5 class="text-xs font-normal text-tertiary-300">Owner's Name</h5>
                            <p class="text-xl text-tertiary-700 font-medium">{{ getOwnerName(vehicle.attributes.ownedBy) ? getOwnerName(vehicle.attributes.ownedBy) : '-'}}</p>
                        </div>
                        <div class="col-span-2">
                            <h5 class="text-xs font-normal text-tertiary-300">Plate Number</h5>
                            <p class="text-xl text-tertiary-700 font-medium">{{ vehicle.attributes.plateNumber ? vehicle.attributes.plateNumber : '-' }}</p>
                        </div>
                    </template>
                    <div class="col-span-2 grid grid-cols-3 xl:grid-cols-4 gap-y-4">
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Make</h5>
                            <p class="text-tertiary-700 font-medium">{{ vehicle.attributes.make ? vehicle.attributes.make : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Color </h5>
                            <p class="text-tertiary-700 font-medium">{{ vehicle.attributes.color ? vehicle.attributes.color : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Fuel Type</h5>
                            <p class="text-tertiary-700 font-medium">{{ vehicle.attributes.fuelType ? vehicle.attributes.fuelType : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Vehicle Category</h5>
                            <p class="text-xl text-tertiary-700 font-medium">{{ vehicle.attributes.category ? vehicle.attributes.category : '-' }}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Tank Capacity</h5>
                            <p class="text-tertiary-700 font-medium">{{ vehicle.attributes.tankCapacity ? vehicle.attributes.tankCapacity : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Model</h5>
                            <p class="text-tertiary-700 font-medium">{{ vehicle.attributes.model ? vehicle.attributes.model : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300 capitalize">Engine Capacity</h5>
                            <p class="text-tertiary-700 font-medium">{{ vehicle.attributes.engineCapacity ? vehicle.attributes.engineCapacity : '-'}}</p>
                        </div>
                        <!-- <div>
                            <h5 class="text-xs font-normal text-tertiary-300 truncate">State Of Plate Number Allocation</h5>
                            <p class="text-tertiary-700 font-medium">{{ vehicle.attributes.stateOfPlateNumberAllocation ? vehicle.attributes.stateOfPlateNumberAllocation : '-'}}</p>
                        </div> -->
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Year</h5>
                            <p class="text-tertiary-700 font-medium">{{ vehicle.attributes.year ? vehicle.attributes.year : '-'}}</p>
                        </div>
                        <div class="">
                            <h5 class="text-xs font-normal text-tertiary-300">Engine Number</h5>
                            <p class="text-tertiary-700 font-medium">{{ vehicle.attributes.engineNumber ? vehicle.attributes.engineNumber : '-'}}</p>
                        </div>
                        <div v-if="vehicle.attributes.seatCode" class="">
                            <h5 class="text-xs font-normal text-tertiary-300">Seat Code</h5>
                            <p class="text-tertiary-700 font-medium">{{ vehicle.attributes.seatCode.code ? vehicle.attributes.seatCode.code : '-'}} Seat</p>
                        </div>
                        <div class="">
                            <h5 class="text-xs font-normal text-tertiary-300">Type</h5>
                            <p class="text-tertiary-700 font-medium">{{ vehicle.attributes.type ? vehicle.attributes.type : '-'}} </p>
                        </div>
                        <div class="">
                            <h5 class="text-xs font-normal text-tertiary-300">chansis Number</h5>
                            <p class="text-tertiary-700 font-medium">{{ vehicle.attributes.chansisNumber ? vehicle.attributes.chansisNumber : '-'}} </p>
                        </div>
                        <div class="">
                            <h5 class="text-xs font-normal text-tertiary-300">Mileage</h5>
                            <p class="text-tertiary-700 font-medium">{{ vehicle.attributes.mileage ? vehicle.attributes.mileage : '-'}} </p>
                        </div>
                    </div>
                </BioData>

                <div class="grid grid-cols-3 gap-x-6">
                    <div class="col-span-2">
                        <Table classes="rounded-md" :head_data="table_head_data"> 
                            <template v-slot:head>
                                <TableFilter />
                            </template>

                            <tr v-for="item in demo">
                                <td class="text-left py-4 px-5">{{ item.unique_Id }}</td>
                                <td class="text-left py-4 px-5">{{ item.name }}</td>
                                <!-- <td class="text-left py-4 px-5">{{ item.category }}</td> -->
                                <td class="text-left py-4 px-5"><a class="hover:text-blue-500" href="tel:622322662">{{ item.date_created }}</a></td>
                                <td class="text-left py-4 px-5">
                                    <Status classes="w-24 h-8 text-xs" :status="item.verification_status" />
                                </td>
                            </tr>
                        </Table>
                    </div>
                    <div class="grid gap-4 max-h-100">
                        <ActivitiesLog />
                    </div>
                </div>
                <Sliding classes="min-w-150" v-show="toggle_slide"> 
                    <template slot="head">
                        <div class="flex items-center justify-between">
                            <div>
                                <h4 class="text-2xl text-primary-900 font-semibold">Update Data</h4>
                                <!-- <p class="text-base text-tertiary-600 font-normal py-2">#0123</p/> -->
                            </div>
                            <button @click="toggleSlide" class="text-tertiary-600 font-semibold focus:outline-none border-0 text-2xl">X</button>
                        </div>
                    </template>
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
                        <div class="p-5" v-show="activeTab === 0">
                            <form class="grid grid-cols-2 gap-6" @submit.prevent="submitUpdateOwner">
                                <div class="flex flex-col">
                                    <label for="first_name" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Vehicle Category</label>
                                    <input v-model="update_data.vehicleCategory" id="first_name" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Labaika" />
                                </div>
                                <div class="flex flex-col">
                                    <label for="last_name" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Vehicle Make</label>
                                    <input v-model="update_data.make" id="last_name" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Aladeen" />
                                </div>
                                <div class="flex flex-col">
                                    <label for="agency_name" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Plate Number</label>
                                    <input v-model="update_data.plateNumber" id="agency_name" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Erinjobe" />
                                </div>
                                <div class="flex flex-col">
                                    <label for="district" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Vehicle Model</label>
                                    <input v-model="update_data.model" id="district" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Male" />
                                </div>
                                <div class="flex flex-col">
                                    <label for="role_or_permission" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Type</label>
                                    <input v-model="update_data.type" id="role_or_permission" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="0123456789101" />
                                </div>
                                <div class="flex flex-col">
                                    <label for="ministry" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Year Of Manufacture</label>
                                    <input v-model="update_data.year" id="ministry" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="23 Jan, 1994" />
                                </div>
                                <div class="flex flex-col">
                                    <label for="address" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Engine Capacity</label>
                                    <input v-model="update_data.engineCapacity" id="address" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="+2348012345678" />
                                </div>
                                <div class="flex flex-col">
                                    <label for="state" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Engine Number</label>
                                    <input v-model="update_data.engineNumber" id="state" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Ireposi South" />
                                </div>
                                <div class="flex flex-col">
                                    <label for="city" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Fuel Type</label>
                                    <input v-model="update_data.fuelType" id="city" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="everything.some@nothing.com" />
                                </div>
                                <div class="flex flex-col">
                                    <label for="lga" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Chansis Number</label>
                                    <input v-model="update_data.chansisNumber" id="lga" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Ikeja" />
                                </div>
                                <div class="flex flex-col">
                                    <label for="lga" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">State Of Plate Number Allocation</label>
                                    <input v-model="update_data.stateOfPlateNumberAllocation" id="lga" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Ikeja" />
                                </div>
                                <div class="flex flex-col">
                                    <label for="lga" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Vehicle Color</label>
                                    <input v-model="update_data.color" id="lga" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Ikeja" />
                                </div>
                                <div class="flex flex-col">
                                    <label for="lga" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Engine Capacity</label>
                                    <input v-model="update_data.engineCapacity" id="lga" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Ikeja" />
                                </div>
                                <div class="flex flex-col">
                                    <label for="lga" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Hackney Code</label>
                                    <input v-model="update_data.hackneyCode" id="lga" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Ikeja" />
                                </div>
                                <div class="flex flex-col">
                                    <label for="lga" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Mileage</label>
                                    <input v-model="update_data.mileage" id="lga" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Ikeja" />
                                </div>
                                <div v-if="update_data.seatCode" class="flex flex-col">
                                    <label for="lga" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Seet Code</label>
                                    <input v-model="update_data.seatCode.code" id="lga" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Ikeja" />
                                </div>
                                <div class="flex flex-col">
                                    <label for="lga" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Seet Code</label>
                                    <input v-model="update_data.tankCapacity" id="lga" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Ikeja" />
                                </div>
                                <div class="col-span-2 flex items-center justify-center py-6">
                                    <Button title="Save Changes" type="solid" />
                                    <Button title="Cancle" />
                                </div>
                            </form>
                        </div>
                    </Tabs>
                </Sliding>
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
                "Bio Data",
                "Documents",
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
    asyncData({store, params,}) {

        let vehicles = store.state.vehicle.vehicles
        let vehicle = vehicles.find( vehicle => vehicle.id == params.id)
        let update_data = {
            id: vehicle.id,
            vehicleCategory: vehicle.attributes.category,
            plateNumber: vehicle.attributes.plateNumber,
            make: vehicle.attributes.make,
            model: vehicle.attributes.model,
            color: vehicle.attributes.color,
            engineCapacity: vehicle.attributes.engineCapacity,
            engineNumber: vehicle.attributes.engineNumber,
            fuelType: vehicle.attributes.fuelType,
            tankCapacity: vehicle.attributes.tankCapacity,
            stateOfPlateNumberAllocation: vehicle.attributes.stateOfPlateNumberAllocation,
            seatCode: vehicle.attributes.seatCode,
            type: vehicle.attributes.type,
            chansisNumber: vehicle.attributes.chansisNumber,
            mileage: vehicle.attributes.mileage,
            year: vehicle.attributes.year,
            hackneyCode: vehicle.attributes.hackneyCode
        }
        return {
            vehicle,
            update_data
        }
    }
}
</script>