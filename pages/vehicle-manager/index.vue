<template>
    <div class="pb-8">
        <BreadCrumb title="Vehicle Manager">
            <nuxt-link class="min-w-28 px-6 h-10 text-white text-xs flex items-center justify-center rounded-xl bg-primary-400 focus:outline-none border-0 mr-4 hover:bg-primary-600" to="/vehicle-manager/vehicles/create">
                New Registration
            </nuxt-link>
        </BreadCrumb>
        <div class="max-w-lg-screen mx-auto px-10 xl:px-32 xl:py-16 py-10 2xl:px-0  h-full w-full">
            <div class="grid grid-cols-1 gap-y-10">
                <div>
                    <Table classes="rounded-xl" :head_data="table_head_data"> 
                        <template v-slot:head>
                            Recently Added
                            <TableFilter class="pt-5 pb-2">
                                <div class="flex items-center">
                                <img src="~/assets/images/filter.png" alt="" srcset="">
                                <select class="focus:outline-none w-24 h-10 border px-2 rounded-md mr-2 ml-1 text-tertiary-300" name="" id="">
                                    <option selected value="10">Category</option>
                                    <option value="10">20</option>
                                    <option value="10">30</option>
                                </select>
                                <select class="focus:outline-none w-24 h-10 border px-2 rounded-md mr-2 text-tertiary-300" name="" id="">
                                    <option selected value="10">Activity</option>
                                    <option value="10">20</option>
                                    <option value="10">30</option>
                                </select>
                                <!-- <input type="date" class="focus:outline-none w-36 h-10 border px-2 rounded-md mr-4 text-tertiary-300" name="" id="" > -->
                                </div>
                                <div class="flex items-center">
                                <span class="text-xs text-tertiary-500 mr-1">Show entries</span>
                                <select class="focus:outline-none w-16 h-10 border px-2 rounded-md" name="" id="">
                                    <option selected value="10">10</option>
                                    <option value="10">20</option>
                                    <option value="10">30</option>
                                </select>
                                </div>
                            </TableFilter>
                        </template>

                        <tr class="relative" v-for="vehicle in vehicles">
                            <td class="text-left py-4 px-5">{{ vehicle.id }}</td>
                            <td class="text-left py-4 px-5">{{ vehicle.plateNumber }}</td>
                            <!-- <td class="text-left py-4 px-5">{{ item.category }}</td> -->
                            <td class="text-left py-4 px-5"><a class="hover:text-blue-500" >
                                {{ vehicle.category }}</a></td>
                            <td class="text-left py-4 px-5"><a class="hover:text-blue-500" >{{ vehicle.category }}</a></td>
                            <td class="text-left py-4 px-5"><a class="hover:text-blue-500" >{{ $moment(vehicle.createdAt).format('MMMM d, YYYY') }}</a></td>
                            <td class="text-left py-4 px-5">
                                <Status classes="w-24 h-8 text-xs" status="approved" />
                            </td>
                            <nuxt-link :to="`/vehicle-manager/vehicles/${vehicle.id}`" class="absolute inset-0 "></nuxt-link>
                        </tr>
                    </Table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AnalysisCard from '~/components/AnalysisCard.vue';
import Table from '~/components/Table.vue';
import Status from '~/components/Status.vue';
import BreadCrumb from '~/components/BreadCrumb.vue';
import TableFilter from '~/components/TableFilter.vue';
import { mapState } from 'vuex'
export default {
    components: {
        AnalysisCard,
        Table,
        Status,
        BreadCrumb,
        TableFilter
    },
    computed: {
        ...mapState({
            vehicles: state => state.vehicle.vehicles,
        })
    },
    methods: {
        getOwnerName (owner) {
            let ownersName
            if (!owner) {
                return
            }
            console.log(owner)
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
    data() {
        return {
            table_head_data: ['Vehicle ID #','Plate Number', 'Vehicle Category', 'Activity', 'Date Created', 'Status'],
            toggleSlide: false
        }
    },
}
</script>