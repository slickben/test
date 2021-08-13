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
                            <p class="text-xl text-tertiary-900 font-semibold">{{ vehicle.id ? vehicle.id : '-'}}</p>
                        </div>
                        <div class="col-span-2">
                            <h5 class="text-xs font-normal text-tertiary-300">Owner's Name</h5>
                            <p class="text-xl text-tertiary-900 font-semibold">{{ getOwnerName(vehicle.ownedBy) ? getOwnerName(vehicle.ownedBy) : '-'}}</p>
                        </div>
                        <div class="col-span-2">
                            <h5 class="text-xs font-normal text-tertiary-300">Plate Number</h5>
                            <p class="text-xl text-tertiary-900 font-semibold">{{ vehicle.plateNumber ? vehicle.plateNumber : '-' }}</p>
                        </div>
                    </template>
                    <div class="col-span-2 grid grid-cols-3 xl:grid-cols-4 gap-y-4">
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Make</h5>
                            <p class="text-tertiary-700 font-medium">{{ vehicle.make ? vehicle.make : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Color </h5>
                            <p class="text-tertiary-700 font-medium">{{ vehicle.color ? vehicle.color : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Fuel Type</h5>
                            <p class="text-tertiary-700 font-medium">{{ vehicle.fuelType ? vehicle.fuelType : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Vehicle Category</h5>
                            <p class="text-xl text-tertiary-700 font-medium">{{ vehicle.category ? vehicle.category : '-' }}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Tank Capacity</h5>
                            <p class="text-tertiary-700 font-medium">{{ vehicle.tankCapacity ? vehicle.tankCapacity : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Model</h5>
                            <p class="text-tertiary-700 font-medium">{{ vehicle.model ? vehicle.model : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300 capitalize">Engine Capacity</h5>
                            <p class="text-tertiary-700 font-medium">{{ vehicle.engineCapacity ? vehicle.engineCapacity : '-'}}</p>
                        </div>
                        <!-- <div>
                            <h5 class="text-xs font-normal text-tertiary-300 truncate">State Of Plate Number Allocation</h5>
                            <p class="text-tertiary-700 font-medium">{{ vehicle.stateOfPlateNumberAllocation ? vehicle.stateOfPlateNumberAllocation : '-'}}</p>
                        </div> -->
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Year</h5>
                            <p class="text-tertiary-700 font-medium">{{ vehicle.year ? vehicle.year : '-'}}</p>
                        </div>
                        <div class="">
                            <h5 class="text-xs font-normal text-tertiary-300">Engine Number</h5>
                            <p class="text-tertiary-700 font-medium">{{ vehicle.engineNumber ? vehicle.engineNumber : '-'}}</p>
                        </div>
                        <div v-if="vehicle.seatCode" class="">
                            <h5 class="text-xs font-normal text-tertiary-300">Seat Code</h5>
                            <p class="text-tertiary-700 font-medium">{{ vehicle.seatCode.code ? vehicle.seatCode.code : '-'}} Seat</p>
                        </div>
                        <div class="">
                            <h5 class="text-xs font-normal text-tertiary-300">Type</h5>
                            <p class="text-tertiary-700 font-medium">{{ vehicle.type ? vehicle.type : '-'}} </p>
                        </div>
                        <div class="">
                            <h5 class="text-xs font-normal text-tertiary-300">chansis Number</h5>
                            <p class="text-tertiary-700 font-medium">{{ vehicle.chansisNumber ? vehicle.chansisNumber : '-'}} </p>
                        </div>
                        <div class="">
                            <h5 class="text-xs font-normal text-tertiary-300">Mileage</h5>
                            <p class="text-tertiary-700 font-medium">{{ vehicle.mileage ? vehicle.mileage : '-'}} </p>
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
import Button from '~/components/Button.vue';
import FormButton from '~/components/FormButton.vue';
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
        FormButton,
        Button
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
            if(!owner) {
                return
            }
            if(owner.type === 'Business') {
                ownersName = owner.businessName
            }else if (owner.type === 'Government') {
                ownersName = owner.agencyName
            }else {
                ownersName = `${owner.firstName} ${owner.lastName} ${owner.otherName ? owner.otherName : ''}`
            }

            return ownersName
        }
    },
    asyncData({store, params,}) {

        let vehicles = store.state.vehicle.vehicles
        let vehicle = vehicles.find( vehicle => vehicle.id == params.id)
        let update_data = {
            id: vehicle.id,
            vehicleCategory: vehicle.category,
            plateNumber: vehicle.plateNumber,
            make: vehicle.make,
            model: vehicle.model,
            color: vehicle.color,
            engineCapacity: vehicle.engineCapacity,
            engineNumber: vehicle.engineNumber,
            fuelType: vehicle.fuelType,
            tankCapacity: vehicle.tankCapacity,
            stateOfPlateNumberAllocation: vehicle.stateOfPlateNumberAllocation,
            seatCode: vehicle.seatCode,
            type: vehicle.type,
            chansisNumber: vehicle.chansisNumber,
            mileage: vehicle.mileage,
            year: vehicle.year,
            hackneyCode: vehicle.hackneyCode
        }
        return {
            vehicle,
            update_data
        }
    }
}
</script>